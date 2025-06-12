import { useState } from 'react';
import type { ResultadoApi } from '../types';

// Usa import.meta.env para variables de entorno en Vite/React
const APPISERVIDOR = import.meta.env.VITE_API_URL || 'http://localhost:5000';
console.log("API Server URL:", APPISERVIDOR);
interface EnlacesProps {
  setResultado: (data: ResultadoApi | null) => void;
  setError: (msg: string | null) => void;
}

export default function Enlaces({ setResultado, setError }: EnlacesProps){

    const [url, setUrl] = useState('');
    const [cargando, setCargando] = useState(false);
    

  const analizarEnlace = async () => {
    if (!url) {
      setError("Por favor ingresa un enlace.");
      setResultado(null);
      return;
    }

    setCargando(true);
    setResultado(null);
    setError(null);

    try {
      // const res = await fetch('http://localhost:5000/analizar', {
      const res = await fetch(`${APPISERVIDOR}/analizar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!res.ok) throw new Error("Error al conectar con el servidor");

      const data = await res.json();
      setResultado(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("El Servidor no responde, por favor intentalo mas tarde.");
      } else {
        setError("Ocurrió un error desconocido.");
      }
    } finally {
      setCargando(false);
    }
  };
    return (
        <div className="my-2 sm:m-1 md:m-6 lg:mx-120 flex flex-col flex-wrap items-center justify-center p-4 rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 shadow-lg hover:shadow-2xl hover:shadow-white hover:text-white hover:border sm:flex-row">
            <p className=" text-2xl font-extrabold text-gray-900 justify-center items-center flex">Link</p> 
            <div className=" pr-2 max-w-[600px] w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none ">
                    {/* Icono de enlace */}
                    <svg className=" h-4 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 7h2a5 5 0 0 1 0 10h-2m-10 0H5a5 5 0 0 1 0-10h2m2 5h6"/>
                    </svg>
                </div>
                <input type="search" id="search" className="m-2 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://detecter-fake-news.vercel.app/" typeof="text" value={url} onChange={(e)=> setUrl(e.target.value)}/>
            </div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer max-w-[160px]" onClick={analizarEnlace} disabled={cargando}>
            {cargando ? "Analizando..." : "Analizar"}
            <span className="animate-pulse"> 🔍</span>  
            </button>
        </div>
        )
}
