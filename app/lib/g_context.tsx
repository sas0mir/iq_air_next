"use client"

import { createContext, useReducer } from "react";
import { ILocation } from "./constants";
import UserProvider from "./session_provider";
import React, { ReactNode } from "react";

const initialState = {
    gLocation: {country: 'Russia', state: 'Tatarstan', city: 'Kazan'},
    gWeather: {},
    gPollution: {},
    gUser: {},
    authorized: false,
};

//реактовский useReducer для работы с контекстом
const reducer = (state: any, action: any) => {
    console.log('REDUCER-2->', action, state);
    let newState = {...state};
    switch (action.type) {
        case 'setUser':
            newState.gUser = action.payload;
            newState.authorized = true;
            return newState;
        case 'setLocation':
            newState.gLocation = action.payload;
            return newState;
        case 'setWeather':
            newState.gWeather = action.payload;
            return newState;
        case 'setPollution':
            newState.gPollution = action.payload;
            return newState
        default:
            return state
    }
};

//контекст для глобальных переменных
export const globalContext = createContext({
    globalState: initialState,
    setUser: (gUser: any) => {},
    setLocation: (gLocation: ILocation) => {},
    setWeather: (gWeather: any) => {},
    setPollution: (gPollution: any) => {}
});

export default function Providers({children}: {children: ReactNode}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <globalContext.Provider value={{
            globalState: state,
            setUser: (gUser: any) => {dispatch({type: 'setUser', payload: gUser})},
            setLocation: (gLocation: ILocation) => dispatch({type: 'setLocation', payload: gLocation}),
            setWeather: (gWeather: any) => dispatch({type: 'setWeather', payload: gWeather}),
            setPollution: (gPollution: any) => dispatch({type: 'setPollution', payload: gPollution})
        }}>
            <UserProvider>{children}</UserProvider> 
        </globalContext.Provider>
    )
}