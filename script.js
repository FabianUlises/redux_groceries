// Establish DOM elements as variables
const grocerySubmit = document.querySelector('#addGrocery');
const list = document.querySelector('#list');
const clearBtn = document.querySelector('#clear-btn');
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