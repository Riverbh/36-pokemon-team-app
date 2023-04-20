import React, { useContext } from "react";
import GlobalContex from "../State/GlobalContext";
import axios from "axios";



const PokedexCard = (props) => {
    const {state, dispatch} = useContext(GlobalContex)

    const addToTeam = () => {
        axios
            .get(props.poke.url)
            .then((res) => {
                console.log(res.data)
                dispatch({type: 'ADD_TO_TEAM', payload: res.data})
            })
    }

    return(
        <div className="card">
            <img src={props.poke.img} className="poke-img"/>
            <h5>{props.poke.name}</h5>
            <button>Add To Team</button>
        </div>
    )
}

export default PokedexCard