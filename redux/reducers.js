import {RECEIVE_ITEMS, ADD_ITEM} from "./actions";

const initialState = {

}


 const items = (state=initialState, action)=>{
    switch(action.type){
        case RECEIVE_ITEMS:
            return{
                ...state, ...action.payload
            }
        case ADD_ITEM:
            return{
                ...state, 
            }
            default:
               return state
    }
}

export default items;
