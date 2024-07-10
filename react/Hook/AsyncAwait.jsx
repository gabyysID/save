import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';


function AsyncAwait(){
  const[pokemonList,setPokemonlist]= useState([]);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        setPokemonList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar lista de Pokémon:', error);
        setIsLoading(false);
      }
    }

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h1>Lista dos 10 Primeiros Pokémon</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        pokemonList.length > 0 ? (
          <ul>
            {pokemonList.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum Pokémon encontrado.</p>
        )
      )}
    </div>
  );
