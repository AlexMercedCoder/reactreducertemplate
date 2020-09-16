import React, { useReducer } from "react";
import ReactDom from "react-dom";
//STYLE SHEET
import "./styles.scss";
//GLOBAL STATE
import Bundle from "./appState";
const {AppContext, appReducer, initialState} = Bundle
//COMPONENTS
import { Count } from "./components/counter.jsx";


const App = (props) => {
  //Create the State and Dispatch Function which
  //Which is delivered via the AppContext Provider to rest of app
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Count />
    </AppContext.Provider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
