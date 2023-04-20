import React, { useContext, useMemo } from "react";
import GlobalContex from "../State/GlobalContext";


const TeamScreen = () => {
    const {state, dispatch} = useContext(GlobalContex)
    const displayTeam = useMemo(() => state.team.map((poke, index) => {
        return <h5>{poke.name}</h5>
    }), [state.team])

    return (
        <div>
            <h1>My Team</h1>
            {displayTeam}
        </div>
    )
}

export default TeamScreen