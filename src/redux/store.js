import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const initalState = {
    list: []
}
const reducer = (state = initalState, action) => {
    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            list: [...state.list, action.payload]
        }
    }
    return state
}

export const fetchItem = () => {
    return async (dispatch) => {
        fetch("https://fakestoreapi.com/products").then(async (res) => {
            const response = await res.json();
            dispatch(addItem(response));
        })
    }
}
export const addItem = (payload) => {
    return {
        type: "ADD_ITEM",
        payload
    }
}
export const store = createStore(reducer, applyMiddleware(thunk));
