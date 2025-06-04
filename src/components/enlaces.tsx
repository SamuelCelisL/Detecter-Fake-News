export default function Enlaces(){
    return (
        <div className="m-6 flex flex-col flex-wrap items-center justify-center p-4 rounded-2xl bg-gradient-to-l from-blue-500 to-green-500 shadow-lg hover:shadow-2xl hover:shadow-white hover:text-white sm:flex-row md:w-auto lg:w-auto">
        <p className=" text-2xl font-extrabold text-gray-900 justify-center items-center flex">Link</p>
        <form>   
            <div className="relative pr-2 sm:w-auto md:w-auto lg:w-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none w-full md:w-full lg:w-full">
                    {/* Icono de enlace */}
                    <svg className=" h-4 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 7h2a5 5 0 0 1 0 10h-2m-10 0H5a5 5 0 0 1 0-10h2m2 5h6"/>
                    </svg>
                </div>
                <input type="search" id="search" className="m-2 block w-auto md:w-full lg:w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://detecter-fake-news.vercel.app/" required />
            </div>
        </form>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Verificar<span className="animate-pulse"> 🔍</span>  
                 
            </button>
            </div>
        )
}
