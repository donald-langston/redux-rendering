const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

let generateCircle = document.getElementById('addCircle');

generateCircle.addEventListener("click", () => {
    let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let radius = Math.floor((Math.random() * 200) + 1);
    dispatch({type: 'GENERATE_CIRCLE', color, radius});
})