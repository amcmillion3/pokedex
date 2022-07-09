import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(json => setPokemons(json.results))
  }, [])

  return (
    <div>
      <div className="flex flex-wrap">
        {pokemons.map(pokemon => {
            const poke_id = pokemon.url.split("/")[6];
            const padded_poke_id = poke_id.padStart(3, "0");
            return (
            <div key={pokemon.name}>
                <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${padded_poke_id}.png`} alt={pokemon.name} />
                <h3 key={pokemon.name}>{pokemon.name}</h3>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default Home;