export default function Resultados() {
    // conts {texto}="algo nose ajjajajja";
    return (
        <div className="flex flex-col flex-wrap w-auto items-center justify-center p-4 shadow-lg rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 hover:shadow-2xl hover:shadow-white hover:text-white hover:border m-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Resultados</h1>
            {/* <p className="text-lg text-black mb-2 uppercase underline">Aquí se mostrarán los resultados.</p> */}
            <table className="table-auto border-collapse border max-w-[600px] w-auto md:w-auto lg:w-auto text-black ">
                <thead>
                    <tr>
                        <th className="border">Notas de la evaluacion</th>
                        <th>resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="border">Malcolm Lockyer</td>
                    </tr>
                    <tr>
                        <td className="border">Witchy Woman</td>
                        <td className="border">The Eagles</td>
                    </tr>
                    <tr>
                        <td className="border">Shining Star</td>
                        <td className="border">Earth, Wind, and Fire</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-sm text-black mt-2 wrap-anywhere underline hover:decoration-white hover:text-white cursor-pointer">Recuerda que esta herramienta esta en fase Beta y puede llegar a cometer errores en la evaluación de las noticia.</p>
        </div>
    )
};
