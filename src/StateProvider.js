import { createContext, useContext, useReducer } from "react";

// This prepares the data layer.
export const StateContext = createContext();


// This is going to wrap our app and provide it with data layer with all the values in it which we pass here.
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

