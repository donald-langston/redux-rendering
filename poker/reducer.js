const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, suit, value, card } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if(type === "RANDOM" && card === "card1") {
        let newState = [
            ...state
        ];
        newState[0].value = value;
        newState[0].suit = suit;
        return newState;
    }

    if(type === "RANDOM" && card === "card2") {
        let newState = [
            ...state
        ];
        newState[1].value = value;
        newState[1].suit = suit;
        return newState;
    }
    return state;
}