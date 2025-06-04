export default function Titulo() {    
    return (
    < nav className="flex justify-center py-5">
        <div className="flex justify-center items-center  rounded-2xl w-[700px] bg-gradient-to-r from-green-500 to-blue-500 p-4 shadow-lg hover:shadow-2xl  hover:shadow-white hover:text-white hover:border">
            <img src="/logo.png" alt="Logotipo de la aplicacion" className="size-15 " />
            <h1 className="text-3xl font-bold text-center font-Georgia text-shadow-2xs text-black hover:text-shadow-white ms-4">
            Detecter Fake News
            </h1>
        </div>
    </nav>
    );
  
}
