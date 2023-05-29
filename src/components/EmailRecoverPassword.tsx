import { Link } from "react-router-dom"


export const EmailRecoverPassword = () => {
    return (
     
   
        <div className="w-full md:w-[500px] shadow-xl border rounded-[10px]">
          <div className="mx-2 md:my-0">
             
              <div className="
                  px-6 py-10 ">
      
                 
                  <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800 ">
                      Recuperar contraseña
                  </h2>
      
                     <p className="text-sm text-left mt-3">Ingrese la dirección de correo electrónico verificada de su cuenta de usuario y le enviaremos un enlace para restablecer la contraseña.</p>
                    
                  <form className="mt-3" method="POST">
                     

                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                <span className="px-1 block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/></svg></span>
                      <input id="email" type="email" name="email" placeholder="Email" 
                          className="block w-full py-4 outline-none text-xl"
                          required />
                </div>
      

      
                     <Link to="/CodeRecoverPassword">
                    
                      <button type="submit"
                          className="w-full py-3 mt-2 bg-gray-800 rounded-sm
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
  