
import { Header } from "./Header";
export const RegisterLider = () => {
  return (
    <>
    <Header/>
     
   <div className="flex flex-col items-center md:flex-row">
   <div className="h-fit mt-6 w-[90%] md:w-[500px] shadow-xl m-auto  my-auto border rounded-[10px]">     
    <div className="mx-2 md:my-0  sm:my-auto">
            
            <div className="
                px-6 py-10">
    
               
                <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800">
                    Registrar lider
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
                     
    
                   
                    <button type="submit"
                        className="w-full py-3 mt-3 bg-gray-800 rounded-sm
                        font-medium text-white uppercase
                        focus:outline-none hover:bg-gray-700 hover:shadow-none">
                        Registrar
                    </button>
    
                    
                   

                </form>
            </div>
        </div>
        </div>
        <div className="table">
      
<div className="md:px-16 py-8 w-full">
  <div className="shadow overflow-hidden rounded border-b border-gray-200">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-6 uppercase font-semibold text-sm">Usuario</th>
          <th className="w-1/3 text-left py-3 px-6 uppercase font-semibold text-sm">Contraseña</th>
          <th className="text-left py-3 px-6 uppercase font-semibold text-sm">Rol</th>
         
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Lian</td>
        <td className="w-1/3 text-left py-3 px-4">Smith</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
       
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Emma</td>
        <td className="w-1/3 text-left py-3 px-4">Johnson</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
       
      </tr>
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Oliver</td>
        <td className="w-1/3 text-left py-3 px-4">Williams</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
       
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Isabella</td>
        <td className="w-1/3 text-left py-3 px-4">Brown</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
       
      </tr>
    </tbody>
    </table>
  </div>
</div>

        </div>
   </div>

    </>
  )
}
