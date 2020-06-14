const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, name } = action;

    // Add a Name Tag
    if(type === 'CREATE_TAG') {
        let newState = state.map((item) => {
            return item;
        });
        newState.push(name);
        return newState;
    }

    return state;
}