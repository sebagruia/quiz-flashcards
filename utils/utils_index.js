import AsyncStorage from "@react-native-community/async-storage";

export const getAsyncStorageData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("Angular");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }

  console.log("Done Getting Data from AsyncStorage");
};

export const storeDeckToAsyncStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Error when storing data to AsyncStorage ${error}`);
  }
};

export const formatDate = () => {
  const start = Date.now();
  const now = new Date(start);

  const todayUTC = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
};


export const addDeck = (title, deck) => {
  storeDeckToAsyncStorage(title, deck);
};


export const addCard = (title, deck) => {
  storeDeckToAsyncStorage(title, deck);
};

