const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment() {
    return {type: INCREMENT};
}

export function decrement() {
    return {type: DECREMENT};
}

export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1; // o estado não foi alterado, estamos retornando o resultada da expressão
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}