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
        Desarrollado por <a className='font-bold text-blue-900 hover:text-white underline' href="https://www.linkedin.com/in/samuel-celis-l/" target='_blank'>Samuel Andres Celis Lizcano</a>
      </p>
    </>
  )
}


export default App
