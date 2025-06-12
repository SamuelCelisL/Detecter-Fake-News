import type { ResultadoApi } from "../types";

interface ResultadosProps {
  resultado: ResultadoApi | null;
  error: string | null;
}

const notas = [
  { key: "fuente_confiable", label: "Fuente confiable" },
  { key: "buena_redaccion", label: "Buena redacción" },
  { key: "fecha_actual", label: "Fecha actual" },
  { key: "tiene_fuentes", label: "Tiene fuentes" },
  { key: "sin_sensacionalismo", label: "Sin sensacionalismo" },
] as const;

export default function Resultados({ resultado, error }: ResultadosProps) {
      if (error) {
    return (
        <div className="text-red-600 font-bold m-4">{error}</div>
        );
    }

    if (!resultado) {
        return null; // O un mensaje de espera
    }
    return (
        <div className="flex flex-col flex-wrap w-auto items-center justify-center p-4 shadow-lg rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 hover:shadow-2xl hover:shadow-white hover:text-white hover:border my-2 sm:m-1 md:m-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Resultados</h1>
            {/* Renderiza aquí el contenido de resultado según la estructura que devuelva tu API */}
            {/* <pre className="text-black">{JSON.stringify(resultado, null, 2)}</pre> */}
            <table className="table-auto border-b border-gray-500 max-w-[600px] w-auto md:w-auto lg:w-auto text-black bg-transparent">
                <thead>
                    <tr>
                        <th className="border-b-3 md:min-w-[300px]">Parametros</th>
                        <th className="border-b-3">resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {notas.map((nota) => (
                    <tr key={nota.key}>
                    <td className="border-b">{nota.label}</td>
                    <td className="border-b font-bold">
                        {resultado[nota.key] ? "SI" : "NO"}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br />
            <h2 className="bg-black bg-clip-text text-xl font-bold text-transparent ...">Conclusión</h2>
            <span className="text-black">De acuerdo al nalisis realizado y teniendo en cuenta los items de evalacion la noticia es <span className="font-bold">{resultado.veredicto}</span></span>
            <p className="text-sm cursive text-black mt-2 wrap-anywhere underline hover:decoration-white hover:text-white cursor-pointer max-w-[300px] text-wrap">Recuerda que esta herramienta esta en fase Beta y puede llegar a cometer errores en la evaluación de las noticia.</p>
        </div>
    )
};
