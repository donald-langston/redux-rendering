const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

let form = document.getElementById('nameForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //name stores first element of form (text box) when form is submitted
    let name = e.target[0];
    
    if(name.value) {
        dispatch({type: 'CREATE_TAG', name: name.value });
        //set text input box back to empty after submitting, ready for next input
        name.value = "";
    }
     
});