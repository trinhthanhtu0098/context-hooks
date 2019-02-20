import React, {createContext, useContext, useReducer} from 'react';

// Use for Class based Component
export const StateContext = createContext();

// Use to wrap App
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Use for Functional components
export const getState = () => useContext(StateContext);