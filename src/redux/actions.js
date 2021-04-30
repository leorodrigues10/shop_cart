import { INCREMENT, DECREMENT, REMOVE, REMOVE_ALL } from './actionType'


export const increment = (price) => {
    return {
        type: INCREMENT,
        payload: price
    }
}

export const decrement = (price) => {
    return {
        type: DECREMENT,
        payload: price
    }
}

export const remove = (obj) => {
    return {
        type: REMOVE,
        payload: obj
    }
}

export const removeAll = (obj) => {
    return {
        type: REMOVE_ALL,
    }
}

