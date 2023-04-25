import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

///PREPARING THE DATA LAYER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//HOOK WHICH US TO PULL INFORMATION THE DATA LAYER
export const useStateValue = () => useContext(StateContext);
