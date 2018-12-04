import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


const todos = (state = [], {type, payload}) => {
    let nextState = state;

    if (type === 'ADD_TODO') {
        nextState = [...nextState, payload];
    }

    return nextState;
};

const myReducers = combineReducers({
    todos,
});

const store = createStore(
    myReducers,
    {todos: ['Foo']},
    composeWithDevTools(
        applyMiddleware(...[thunk], createLogger({collapsed: true})),
    ),
);

const addTodos = () => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        payload: 'Baz',
    });
    dispatch({
        type: 'ADD_TODO',
        payload: 'Quz',
    });
};

store.dispatch(addTodos());

console.log(store.getState());
