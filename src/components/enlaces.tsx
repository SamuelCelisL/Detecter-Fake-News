export default function Enlaces(){
    return (
        <div className="m-6 flex items-center justify-center p-4 rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 shadow-lg hover:shadow-2xl hover:shadow-white hover:text-white max-w-full min-w-xl">
        <p className=" text-2xl font-extrabold text-gray-900 justify-center items-center flex">Link</p>
            {/* <div className=" flex ">
                <p className="flex justify-center text-center items-center pl-3">🔗</p>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://detecter-fake-news.vercel.app/" />
            </div>
  */}
        <form>   
            <div className="relative pl-2 max-w-lg min-w-xl">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    {/* Icono de enlace */}
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 7h2a5 5 0 0 1 0 10h-2m-10 0H5a5 5 0 0 1 0-10h2m2 5h6"/>
                    </svg>
                </div>
                <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://detecter-fake-news.vercel.app/" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verificar 🔍</button>
            </div>
        </form>
            {/* <button className="text-black font-bold bg-green-500  px-4 py-2 rounded-2xl hover:bg-green-700 transition-colors">   
                Verificar 🔍
            </button> */}
            </div>
        )
}
