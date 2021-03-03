import React, { useState } from "react";

function reducer(state: any, action: string) {
  let newState: any;
  switch (action) {
    case "value":
      newState = [...state];
      break;

    default:
      break;
  }
  return newState;
}

export default function UseUseReducer() {
  const useReducer = (
    reducer: (arg0: any, arg1: any) => any,
    initValues: any
  ) => {
    const [state, setState] = useState(initValues);
    function dispatch(action: any) {
      const result = reducer(state, action);
      setState(result);
    }
    return [state, dispatch];
  };
  return <div></div>;
}
