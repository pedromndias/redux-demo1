const redux = require("redux")
// import { legacy_createStore as createStore} from 'redux'


// ? Reducer function. Gets old state and a Dispatched Action as input. Outputs a new state object.
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }
    }

    return state
}


// Then, is the reducer that will manipulate the state:
const store = redux.createStore(counterReducer)

// console.log(store.getState());

// Now for the subscription function that will get state:
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState);
}

// For the counterSubscriber to be executed everytime the state changes:
store.subscribe(counterSubscriber)

// Let's create and dispatch an action:
store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })