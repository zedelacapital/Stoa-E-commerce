export const INCREMENT_COUNDER = "INCREMENT_COUNTER";
export const DECREMENT_COUNDER = "DECREMENT_COUNTER";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: 'Yarc (yet another redux counter)'
}

export function increment(amount = 1) {
    return {
        type:  INCREMENT_COUNDER,
        payload: amount 
    }
} 

export function decrement(amount = 1) {
    return {
        type:  DECREMENT_COUNDER,
        payload: amount 
    }
} 

export default function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case INCREMENT_COUNDER:
            return {
                ...state,
                data: state.data + action.payload
            }
        case DECREMENT_COUNDER:
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }
}
