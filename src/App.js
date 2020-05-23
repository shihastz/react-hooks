
//hooks
import React, { useReducer } from "react";
import "./App.css";
import HooksCounter from "./componenet/hooks/HooksCounter";
import HookCounterTwo from "./componenet/hooks/HookCounterTwo";
import HookForm from "./componenet/hooks/HookForm";
import HooksList from "./componenet/hooks/HooksList";
import EffectHooksCounter from "./componenet/hooks/EffectHookCounter";
import HooksMouseDisplay from "./componenet/hooks/HooksMouseDisplay";
import IntervalHookCounter from "./componenet/hooks/IntervalHookCounter";
import DataFetching from "./componenet/hooks/DataFetching";
import SingleDataFetching from "./componenet/hooks/SingleDataFetching";
import ComponentA from "./componenet/hooks/hooksContext/ComponentA";
import CounterOne from "./componenet/hooks/reducer/CounterOne";
import MultipleCounter from "./componenet/hooks/reducer/MultipleCounter";
import MultipleReducerCounter from "./componenet/hooks/reducer/MultipleReducerCounter";
import ComponentX from "./componenet/hooks/globalStateManagement/ComponentX";
import ReducerDataFetching from "./componenet/hooks/reducer/ReducerDataFetching";
import FocusInput from "./componenet/hooks/FocusInput";
import IntervalHookCounterTwo from "./componenet/hooks/IntervalHookCounterTwo";
import CustomUseInput from "./componenet/hooks/customHooks/CustomUseInput";
import CustomUseForm from "./componenet/hooks/customHooks/CustomUseForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

//for global state management
export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  //for global stste management
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>HOOKS</h2>
      <HooksCounter />
      <HookCounterTwo />
      <HookForm />
      <HooksList />
      <EffectHooksCounter />
      <HooksMouseDisplay />
      <IntervalHookCounter />
      <DataFetching />
      <SingleDataFetching />

      <UserContext.Provider value={"shihas"}>
        <ChannelContext.Provider value={"React Media"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <CounterOne />
      <MultipleCounter />
      <MultipleReducerCounter />

      <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h3>
          Sharing Counter State through nested components (Global State
          Management)
        </h3>
        <h4>{count}</h4>
        <ComponentX />
      </CounterContext.Provider>

      <ReducerDataFetching/>
      <FocusInput/>
      <IntervalHookCounterTwo/>
      <CustomUseInput/>
      <CustomUseForm/>
      
    </div>
  );
}

export default App;
