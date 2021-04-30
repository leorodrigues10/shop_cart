import {INCREMENT, DECREMENT, REMOVE, REMOVE_ALL} from './actionType';

const initialState = {
    totalPrice: 170000,
    cartQuantity: 4
}

export const countReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                totalPrice:state.totalPrice + action.payload,
                cartQuantity: state.cartQuantity + 1
            };

        case DECREMENT:
            return{
                ...state,
                totalPrice:state.totalPrice - action.payload,
                cartQuantity: state.cartQuantity - 1
                
            };
        
        case REMOVE:
            return {
                ...state,
                totalPrice:state.totalPrice - action.payload.quantity * action.payload.price,
                cartQuantity: state.cartQuantity - action.payload.quantity
            }
        case REMOVE_ALL:
            return {
                ...state,
                totalPrice: 0,
                cartQuantity: 0
            }

        default:
            return state;

    }
}