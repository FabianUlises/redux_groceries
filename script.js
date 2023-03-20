// Establish DOM elements as variables
const grocerySubmit = document.querySelector('#addGrocery');
const list = document.querySelector('#list');
const clearBtn = document.querySelector('#clear-btn');
// Redux setup
// Default state value
const initialState = {
    groceries: []
};
// Reducer
const groceryReducer = (state=initialState.groceries, action) => {
    switch(action.type) {
        case 'grocery/add':
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        case 'grocery/clear':
            return []
        default:
            return state
    };
};
// Store
let store = Redux.createStore(groceryReducer);
// Function to clear grocery list
const clearList = () => {
    document.querySelector('#newItem').value = '';
    store.dispatch({
        type: 'grocery/clear'
    });
    console.log(store.getState());
};
// Function to add new item to grocery list
const newGrocery = (e) => {
    e.preventDefault();
    let groceryText = document.querySelector('#newItem').value;
    store.dispatch({
        type: 'grocery/add',
        text: groceryText
    });
    console.log(store.getState());
    document.querySelector('#newItem').value = '';
};
// Function to render list from state
const renderList = (state) => {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    };
    state.forEach((item) => {
        // Generate list item for list
        let li = document.createElement('li');
        // Append li to dom list element
        list.appendChild(li);
        // Populate with text content
        li.textContent = item.text

    });
};
// Function to render items to dom
const render = () => {
    const state = store.getState();
    renderList(state);
};
store.subscribe(render);
// EventListeners
grocerySubmit.addEventListener('click', (e) => newGrocery(e));
clearBtn.addEventListener('click', clearList);