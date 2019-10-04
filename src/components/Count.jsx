import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.Type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}

export default function Count() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({ Type: "DEC" })}> DEC </button>
      <button onClick={() => dispatch({ Type: "INC" })}> INC </button>
    </div>
  );
}
