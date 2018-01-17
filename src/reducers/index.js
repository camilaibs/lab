const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_CARD = 'ADD_CARD';
const EDIT_CARD = 'EDIT_CARD';
const SAVE_CARD = 'SAVE_CARD';
const REMOVE_CARD = 'REMOVE_CARD';


// actions creators
export function increment() {
    return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
}

export function addCard(card) {
    return { type: ADD_CARD, card };
}

export function editCard(id) {
    return { type: EDIT_CARD, id };
}

export function saveCard(card) {
    return { type: SAVE_CARD, card };
}

export function removeCard(id) {
    return { type: REMOVE_CARD, id };
}


// reducers
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1; // o estado não foi alterado, estamos retornando o resultada da expressão
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            return [...state, action.card];
        case EDIT_CARD:
            return state.map(card => card.id === action.id ?  {...card, editing: true} : card);
        case SAVE_CARD:
            return state.map(card => card.id === action.card.id ? {...card, ...action.card, editing: false} : card);
        case REMOVE_CARD:
            return state.filter(card => card.id !== action.id);
        default:
            return state;
    }
}

export default function root(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        cards: cards(state.cards, action)
    };
}