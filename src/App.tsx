// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Titulo  from "./components/titulo";
import Informacion from "./components/informacion";
import Enlaces from "./components/enlaces";
import Resultados from './components/resultados';

function App() {

  return (
    <>
      <Titulo />
      <Informacion />
      <Enlaces />
      <Resultados />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
