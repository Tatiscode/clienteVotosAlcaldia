import { Link } from "react-router-dom"


export const Login = () => {
    return (
     
   
          <div className="">

        <div className=" h-fit w-full md:w-[500px] shadow-xl m-auto  absolute  inset-0 my-auto  border rounded-[10px]"> 
              <div className="mx-2 md:my-0  ">
             
             <div className="px-6 py-10">
     
                 <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800">
                     Iniciar sesion
                 </h2>
     
                 <form className="mt-3" method="POST">
                    
               <div className="flex items-center justify-center border-2 rounded-[10px] my-3 ">
               <span className="px-1 block">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="gray" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
               </span>
                     <input id="user" type="text" name="user" placeholder="Usuario" 
                         className="block w-full py-4 outline-none text-xl"
                         required />
               </div>
     
                 <div className="flex items-center justify-center border-2 rounded-[10px] my-3 " >
                <span className="px-1 block">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="gray" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
                </span>
                     <input id="password" type="password" name="password" placeholder="Contraseña" 
                         className="block w-full py-4 outline-none text-xl "
                         required />
                 </div>
                     
     
                    <Link to="/FilterPerson">
                   
                     <button type="submit"
                         className="w-full py-3 mt-3 bg-gray-800 rounded-sm
                         font-medium text-white uppercase
                         focus:outline-none hover:bg-gray-700 hover:shadow-none">
                         Iniciar Sesion
                     </button>

                     </Link>
     
                     
                     <div className=" flex flex-col mt-8 sm:mb-4 text-sm text-center">
                       <Link className="flex-2  underline text-blue-600" to="/EmailRecoverPassword">
                             ¿Has olvidado la contraseña?
                       </Link>

                       <p className="flex-2 "> ¿No tienes una cuenta? 
                      
                       <span > <Link  className="underline text-blue-600" to="/SingUp">Registrate </Link></span>
                       
                       </p>
             
                        
                     </div>
                 </form>
             </div>
         </div>
          </div>
        </div>
  
    )
  }
  