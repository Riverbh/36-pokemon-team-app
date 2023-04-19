import React from "react";

const PokedexCard = (props) => {
    return(
        <div className="card">
            <img src={props.poke.img} className="poke-img"/>
            <h5>{props.poke.name}</h5>
            <button>Add To Team</button>
        </div>
    )
}

export default PokedexCard