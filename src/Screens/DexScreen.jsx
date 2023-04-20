import React, { useEffect, useState } from "react";
import axios from "axios";
import PokedexCard from "../Components/PokedexCard";

const DexScreen = ({pokemon}) => {
    // const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => setSearch(e.target.value.toLowerCase())

    // useEffect(()=>{
    //     axios
    //     .get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    //     .then((res) => {
    //         let newState = res.data.results.map((item, index) => {
    //             item.img=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    //             return item
    //         })
    //         setPokemon(newState)
    //         console.log(newState)
    //     })
    // }, [])

    const pokemonDisplay = pokemon
        .filter((poke, index) => {
            return poke.name.includes(search)
        })
        .map((poke, index) => {
        return <PokedexCard poke={poke} index={index}/>
    })

    return (
        <div>
            <h1>PokeDex</h1>
            <input type="text" placeholder="Search" onChange={handleSearch}/>
            {pokemonDisplay}
        </div>
    )
}

export default DexScreen