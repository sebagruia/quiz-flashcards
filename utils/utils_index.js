import AsyncStorage from "@react-native-community/async-storage";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "Quiz:notifications";

export const formatDate = () => {
  const start = Date.now();
  const now = new Date(start);

  const todayUTC = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
};

export const storeDeckToAsyncStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Error when storing data to AsyncStorage ${error}`);
  }
};

export const addDeck = (title, deck) => {
  storeDeckToAsyncStorage(title, deck);
};

export const addCard = (title, deck) => {
  storeDeckToAsyncStorage(title, deck);
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(`Error trying to clear AsyncStorage ${e}`);
  }
};

export const removeDeckFromAsyncStorage = async (title) => {
  try {
    await AsyncStorage.removeItem(title);
  } catch (e) {
    console.log(`Error trying to remove deck from AsyncStorage ${e}`);
  }
};

// Notifications

export const clearLocalNotification = async () => {
  return await AsyncStorage.removeItem(NOTIFICATION_KEY, async ()=>{
    await Notifications.cancelAllScheduledNotificationsAsync()
  })
};

const createNotification = () => {
  return {
    title: "Learn More",
    body: "✋ don't forget to exercise your skills",
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
};
export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const parsedData = JSON.parse(data);
  if (parsedData === null) {
    const persissionStatus = await Permissions.askAsync(
      Permissions.NOTIFICATIONS
    );
    if (persissionStatus === "granted") {
      await Notifications.cancelAllScheduledNotificationsAsync();

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate());
      tomorrow.setHours(14);
      tomorrow.setMinutes(0);

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day",
      });
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
};
