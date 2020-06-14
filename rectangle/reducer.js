const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, direction, amount, color } = action;

    // ACTION 1 - Increment height by 10
    if(type === 'CHANGE_DIMENSIONS' && direction === 'height') {
        let newState = {
            ...state,
            height: state.height + amount
        }
        return newState;
    }

    // ACTION 2 - Increment width by 10
    if(type === 'CHANGE_DIMENSIONS' && direction === 'width') {
        let newState = {
            ...state,
            width: state.width + amount
        }
        return newState;
    }

    // ACTION 3 - Change the color
    if(type === 'CHANGE_COLOR' && color) {
        let newState = {
            ...state,
            color: color
        }
        return newState;
    }

    return state;
}