import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormProps {
  getPokemon: (pokemonName: string) => void;
}

const Form: React.FC<FormProps> = ({ getPokemon }) => {
  const [pokemonName, setPokemonName] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getPokemon(pokemonName);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pokemon Name:
        <input type="text" value={pokemonName} onChange={handleChange} />
      </label>
      <button type="submit">Get Pokemon</button>
    </form>
  );
};

export default Form;
