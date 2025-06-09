// import { useState } from 'react'
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
      <p className="text-black">
        Desarrollado por Samuel Andres Celis Lizcano
      </p>
    </>
  )
}


export default App
