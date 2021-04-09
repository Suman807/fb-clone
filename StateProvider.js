import React,{ createContext, useContext, useReducer } from 'react';

export const StateContetxt = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContetxt.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContetxt.Provider>
);

export const useStateValue = () => useContext(StateContetxt);