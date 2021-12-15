import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload};
    case "EMAIL":
      return { ...state, email: action.payload};
    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, {username: "", email: ""})
  return (
    <div>
      <input type="text" onChange={(e) => { dispatch({ type: "USERNAME", payload: e.target.value }) }} />
      <input type="text" onChange={(e) => { dispatch({ type: "EMAIL", payload: e.target.value }) }} />
      <h4>{"Username: " + state.username}</h4>
      <h4>{"Email: " + state.email}</h4>
    </div>
  )
}

export default UseReducerHook
