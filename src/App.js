import bundle from "./appState";
const {AppContext, appReducer, initialState} = bundle
import  Count  from "./components/counter.jsx";
import { useReducer } from "react";

const App = (props) => {
    //Create the State and Dispatch Function which
    //Which is delivered via the AppContext Provider to rest of app
    const [state, dispatch] = useReducer(appReducer, initialState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <Count/>
      </AppContext.Provider>
    );
  };

export default App