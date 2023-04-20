import { createContext, useReducer } from "react";

const initialState = {
    team: [],
    pokedex: [],

}

const GlobalContex = createContext()

const GlobalContexProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD_TO_TEAM':
                return {...state, team: [...state.team, action.payload]}
            default:
                return state
        }
    }
    
    return (
        <GlobalContex.Provider value={{}}>
            {props.children}
        </GlobalContex.Provider>
    )
}

export {GlobalContexProvider}
export default GlobalContex