import { useState, useEffect } from 'react';
import './PokemonCard.css';
import 'bootstrap/dist/css/bootstrap.css';

import Form from './components/form/form.tsx';

interface Pokemon {
  id: number;
  name: string;
  img: string;
  abilities: string[];
}


const PokemonCard = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 0,
    name: '',
    img: '',
    abilities: [],
  });

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/mewtwo');
      const data = await response.json();
      setPokemon({
        id: data.id,
        name: data.name,
        img: data.sprites.other.home.front_default,
        abilities: data.abilities[0].ability.name,
      });
    };
    getPokemon();
  }, []);

  return (
    <div>
    //   <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div>
              <div className="card">
                <div className="d-flex justify-content-center p-3">
                  <h2 className="lead mb-0 text-capitalize">{pokemon.name}</h2>
                    
                </div>
                <img
                  src={pokemon.img}
                  className="card-img-top"
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">Pokemon #
                        {pokemon.id}
                      </a>
                    </p>
                    <p className="small text-danger">
                      <p>Abilities: {pokemon.abilities}</p>
                    
                    </p>
                  </div>
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokemonCard;
