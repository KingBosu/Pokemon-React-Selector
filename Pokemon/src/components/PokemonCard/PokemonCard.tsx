import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./PokemonCard.css";
import "bootstrap/dist/css/bootstrap.css";

interface Pokemon {
  id: number;
  name: string;
  img: string;
  abilities: string[];
}

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonName, setPokemonName] = useState<string>("");
  

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getPokemon();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const data = await response.json();
    setPokemon({
      id: data.id,
      name: data.name,
      img: data.sprites.other.home.front_default,
      abilities: data.abilities.map((ability: any) => ability.ability.name),
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon Name:
          <input type="text" value={pokemonName} onChange={handleChange} />
        </label>
        <button type="submit">Get Pokemon</button>
      </form>

      {pokemon && (
        <div className="container py-5 ">
          <div className="row">
            <div>
              <div id="pokemon card">
                <div className="card d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center p-3">
                    <h2 className="lead mb-0 text-capitalize">
                      {pokemon.name}
                    </h2>
                  </div>
                  <img
                    src={pokemon.img}
                    className="card-img-top "
                    alt={pokemon.name}
                    style={{ width: "250px", height: "250px" }}
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Pokemon #{pokemon.id}
                        </a>
                      </p>
                      <p className="small text-danger">
                        <p>Abilities: {pokemon.abilities.join(", ")}</p>
                      </p>
                    </div>
                  </div>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
