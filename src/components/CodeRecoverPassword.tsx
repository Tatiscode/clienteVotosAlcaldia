import { Link } from 'react-router-dom'

export const CodeRecoverPassword = () => {
  return (


    <div className="w-[500px] shadow-xl border rounded-[10px]">
    <div className="mx-2 my-20 sm:my-auto  w-">
             
              <div className="
                  px-6 py-10 sm:px-10 sm:py-6 
                  bg-white rounded-lg shadow-md lg:shadow-lg">
      
                 
                  <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800  ">
                      Verificar Codigo
                  </h2>
      
                  <form className="mt-3" method="POST">
                     
                    
                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
                      <input id="password" type="password" name="password" placeholder="Codigo" 
                          className="block w-full p-2
                          "
                          required />
                  </div>
                      

      
                     <Link to="/RestorePassword">
                    
                      <button type="submit"
                          className="w-full py-3 mt-3 bg-gray-800 rounded-sm
                          font-medium text-white uppercase
                          focus:outline-none hover:bg-gray-700 hover:shadow-none">
                          Enviar
                      </button>
                      </Link>
      
                      
                     
                  </form>
              </div>
          </div>
          </div>
  )
}
