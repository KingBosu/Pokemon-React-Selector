import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PokemonCard from './components/PokemonCard/PokemonCard.tsx'
import Form from './components/Form/Form.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Form />
    <App />
    <PokemonCard />
  </React.StrictMode>,
)
