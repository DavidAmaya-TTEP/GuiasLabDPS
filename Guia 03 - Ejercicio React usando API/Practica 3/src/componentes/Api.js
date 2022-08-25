import React, {useState, useEffect} from 'react';

const Pokemones = () => {
    const [pokemones, setPokemones]=useState([]);

    useEffect(() => {
        async function obtenerPokemones(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            const data = await response.json();

            setPokemones(data.results);
            console.log(pokemones)
        }
        obtenerPokemones();
    }, [])
    return (
        <ul>
        {pokemones.map((pokemon, index) => {
            return <p key={index}>{pokemon.name}</p>
        })
        }
        </ul>
    )
}

export default Pokemones