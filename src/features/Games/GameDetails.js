import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function GameDetails() {
    const [game, setGame] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch('https://games-app-siit.herokuapp.com/games/' + id)
            .then(res => res.json())
            .then(data => setGame(data));
    }, [id]);

    if(!game) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <h1>{ game.title }</h1>
            {game.description}
        </div>
    )
}
