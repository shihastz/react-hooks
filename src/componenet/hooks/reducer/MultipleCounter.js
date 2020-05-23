import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 100
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstCounter : state.firstCounter + action.value};
    case "decrement":
      return {...state, firstCounter : state.firstCounter - action.value};
    case "increment2":
      return {...state, secondCounter : state.secondCounter + action.value};
    case "decrement2":
      return {...state, secondCounter : state.secondCounter - action.value};
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function MultipleCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <hr />
      <h3>Multiple Counters using useReducer</h3>
      <button onClick={() => dispatch({type : 'reset'})}>Reset All</button>
      <h4>Counter1 => {count.firstCounter}</h4>
      <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
      <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
      <button onClick={() => dispatch({type : 'increment', value : 5})}>Increment by 5</button>
      <h4>Counter2 => {count.secondCounter}</h4>
      <button onClick={() => dispatch({type : 'increment2', value : 1})}>Increment</button>
      <button onClick={() => dispatch({type : 'increment2', value : 1})}>Decrement</button>
      
      <hr />
    </div>
  );
}

export default MultipleCounter;
