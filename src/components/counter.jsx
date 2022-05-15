import React, { useContext } from "react";
//GLOBAL STATE
import bundle from "../appState/index.js";
const {type, AppContext} = bundle

const Count = (props) => {

  //PULL STATE AND DISPATCH FROM CONTEXT
  const {state, dispatch} = useContext(AppContext);
  //PULL COUNT FROM STATE
  const { count } = state;

  //PASSING ACTION FUNCTIONS INTO DISPATCH
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(type.add(2))}>Add</button>
      <button onClick={() => dispatch(type.sub(2))}>Subtract</button>
    </div>
  );
};

export default Count
