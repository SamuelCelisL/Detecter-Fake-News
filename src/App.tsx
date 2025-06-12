import './App.css'
import  Titulo  from "./components/titulo";
import Informacion from "./components/informacion";
import Enlaces from "./components/enlaces";
import Resultados from './components/resultados';
import { useState } from 'react';
import type { ResultadoApi } from './types';

function App() {
  const [resultado, setResultado] = useState<ResultadoApi | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Titulo />
      <Informacion />
      <Enlaces setResultado={setResultado} setError={setError}/>
      <Resultados resultado={resultado} error={error}/>
      <p className="text-black">
        Desarrollado por Samuel Andres Celis Lizcano
      </p>
    </>
  )
}


export default App
