import React, { useState } from 'react';
import useFetch from './hooks/useFetch'; // Importa el hook
import './App.css';

function App() {
  const { data, loading, error, fetchData} =useFetch(
    'https://api.adviceslip.com/advice'
  );
  const [advice, setAdvice] = useState('');

  const handleNewAdvice = () => {
    fetchData ();
    if (data && data.slip) {
      setAdvice(data.slip.advice);
    }
  };

  return (
    <div id="app">
      <h1>Consejo del Día</h1>
      {loading ? (
        <p>Cargando consejo...</p>
      ) : error ? (
        <p>Error al cargar el consejo: {error}</p>
      ) : (
        <p>{advice || 'Haz clic en el dado para obtener un consejo.'}</p>
      )}
      <button onClick={handleNewAdvice}>🎲</button>
    </div>
  );
}

export default App;
