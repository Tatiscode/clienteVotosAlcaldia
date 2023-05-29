
import { Link } from "react-router-dom";


export const Register = () => {
  return (
     <>
     
     <div className="w-[500px] shadow-xl border rounded-[10px]">     
     <div className="mx-2 my-20 sm:my-auto">
             
             <div className="
                 px-6 py-10 sm:px-10 sm:py-6 
                 bg-white rounded-lg shadow-md lg:shadow-lg">
     
                
                 <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800">
                     Registrarte
                 </h2>
     
                 <form className="mt-3" method="POST">
                    
                   
                         
                <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/></svg>
                      <input id="email" type="email" name="email" placeholder="Email" 
                          className="block w-full py-2"
                          required />
                </div>
      
                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
                      <input id="password" type="password" name="password" placeholder="Contraseña" 
                          className="block w-full py-2"
                          required />
                  </div>
                      
     
                    
                     <button type="submit"
                         className="w-full py-3 mt-3 bg-gray-800 rounded-sm
                         font-medium text-white uppercase
                         focus:outline-none hover:bg-gray-700 hover:shadow-none">
                         Registrarte
                     </button>
     
                     
                     <div className=" flex flex-col mt-8 sm:mb-4 text-sm text-center">
                         
                     <p>¿Ya tienes una cuenta? <Link to='/'><span className='flex-2  underline text-blue-600'>Inicia sesión</span></Link></p>
                     </div>

                 </form>
             </div>
         </div>
         </div>

     </>

  )
}


