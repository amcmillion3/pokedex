import { useEffect, useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(json => setPokemons(json.results))
  }, [])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(json => setPokeData(json.results))
  }, [])

  const search = (term) =>
    setPokemons(
      pokeData.filter((d) =>
        d.name.toLowerCase().includes(term.toLowerCase())
      )
    );

  return (
    <div>
        <div className="mt-12 block sm:flex sm:justify-end sm:items-center sm:mr-12">
          <div className="flex justify-between items-center rounded pl-1 pr-3 mx-4 py-1 border-b border-gray-600">
            <input
              type="text"
              onChange={(e) => search(e.target.value)}
              className="bg-transparent outline-none"
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                  fill="rgba(0,0,0,0.92)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
            {pokemons.map(pokemon => {
                const poke_id = pokemon.url.split("/")[6];
                const padded_poke_id = poke_id.padStart(3, "0");
                return (
                <div className="flex flex-col justify-between items-center border-2 rounded border-slate-100 shadow-md hover:shadow-lg bg-white p-4 m-6" key={pokemon.name}>
                    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${padded_poke_id}.png`} alt={pokemon.name} />
                    <h3 className="capitalize text-xl" key={pokemon.name}>{pokemon.name}</h3>
                </div>
                )
            })}
        </div>
    </div>
  );
}

export default Home;