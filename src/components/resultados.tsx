export default function Resultados() {
    // conts {texto}="algo nose ajjajajja";
    return (
        <div className="flex flex-col flex-wrap w-auto items-center justify-center p-4 shadow-lg rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 hover:shadow-2xl hover:shadow-white hover:text-white hover:border m-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Resultados</h1>
            {/* <p className="text-lg text-black mb-2 uppercase underline">Aquí se mostrarán los resultados.</p> */}
            <table className="table-auto border-b border-gray-500 max-w-[600px] w-auto md:w-auto lg:w-auto text-black bg-transparent">
                <thead>
                    <tr>
                        <th className="border-b-3">Notas de la evaluacion</th>
                        <th className="border-b-3">resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-b">Utiliza palabras tecnicas</td>
                        <td className="border-b font-bold">SI</td>
                    </tr>
                    <tr>
                        <td className="border-b">Presenta imagenes que corroboren la información</td>
                        <td className="border-b font-bold">SI</td>
                    </tr>
                    <tr>
                        <td className="border-b">El emisor de la noticia es una pagina o persona desdicada a compartir noticias</td>
                        <td className="border-b font-bold">NO</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="bg-black bg-clip-text text-xl font-bold text-transparent ...">Conclusión</h2>
            <span className="text-black">De acuerdo al nalisis realizado y teniendo en cuenta los items de evalacion la noticia es verdadera</span>
            <p className="text-sm cursive text-black mt-2 wrap-anywhere underline hover:decoration-white hover:text-white cursor-pointer max-w-[300px] text-wrap">Recuerda que esta herramienta esta en fase Beta y puede llegar a cometer errores en la evaluación de las noticia.</p>
        </div>
    )
};
