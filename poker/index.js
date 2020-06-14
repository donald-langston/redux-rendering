const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

let card1Btn = document.getElementById('card1Button');
let card2Btn = document.getElementById('card2Button');
let suits = ['C', 'D', 'H', 'S'];
let values = [
    '2', '3', '4', '5', '6',
    '7', '8', '9', '10','A', 
    'J', 'K', 'Q'
];

let randomSuit = function() {
    return Math.floor(Math.random() * 4);
}

let randomValue = function() {
    return Math.floor(Math.random() * 13);
}

card1Btn.addEventListener('click', () => {
    dispatch({type: "RANDOM", suit: suits[randomSuit()], value: values[randomValue()], card: "card1"});
});

card2Btn.addEventListener('click', () => {
    dispatch({type: "RANDOM", suit: suits[randomSuit()], value: values[randomValue()], card: "card2"});
});