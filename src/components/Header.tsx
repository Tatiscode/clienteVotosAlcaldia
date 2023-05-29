import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="w-full  text-gray-700  border body-font md:flex flex-col">
    <div className="container flex flex-col items-start p-4 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <h1>Sistema de votos</h1>
        </a>
        <nav className="flex items-center justify-center text-base md:ml-auto">
            <Link to="/RegisterSeeCandidato">
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Lideres</a>
            </Link>
            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Candidatos</a>
            
        <div className="items-center h-full pl-6 ml-6 ">
            <a href="#_"
                className="px-4 whitespace-nowrap py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                Cerrar sesion
            </a>
        </div>
        </nav>
    </div>
</div>
  )
}
