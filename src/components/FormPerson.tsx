

export const FormPerson = () => {
  return (


    <div className="w-[500px] shadow-xl border rounded-[10px]">
    <div className="mx-2 my-20 sm:my-auto">
             
              <div className="
                  px-6 py-10 sm:px-10 sm:py-6 
                  bg-white rounded-lg shadow-md lg:shadow-lg">
      
                 
                  <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-800">
                      Ciudadano 
                  </h2>
      
                  <form className="mt-3" method="POST">
                     
                <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="gray" d="M20.77 12.364s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396c-1.36.058-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698c-1.132.452-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888h26.947s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34z"/></svg>
                      <input id="email" type="email" name="email" placeholder="Nombre Completo" 
                          className="block w-full py-2 "
                          required />
                </div>
      
                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2048 1536"><path fill="gray" d="M896 1084q0-54-7.5-100.5t-24.5-90t-51-68.5t-81-25q-64 64-156 64t-156-64q-47 0-81 25t-51 68.5t-24.5 90T256 1084q0 55 31.5 93.5T363 1216h426q44 0 75.5-38.5T896 1084zM768 640q0-80-56-136t-136-56t-136 56t-56 136t56 136t136 56t136-56t56-136zm1024 480v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm-384-256v-64q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23-9t9-23zm384 0v-64q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v64q0 14 9 23t23 9h192q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM128 256h1792v-96q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v96zm1920-96v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1728q66 0 113 47t47 113z"/></svg>
                      <input id="password" type="password" name="password" placeholder="Cedula" 
                          className="block w-full py-2"
                          required />
                  </div>

                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="gray" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                      <input id="password" type="password" name="password" placeholder="Telefono" 
                          className="block w-full py-2"
                          required />
                  </div>

                  <div className="flex items-center justify-center border-2 rounded-[10px] my-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="gray" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
                      <input id="password" type="password" name="password" placeholder="Departamento" 
                          className="block w-full py-2"
                          required />
                  </div>
                      
      
                    
                      <button type="submit"
                          className="w-full py-3 mt-3 bg-gray-800 rounded-sm
                          font-medium text-white uppercase
                          focus:outline-none hover:bg-gray-700 hover:shadow-none">
                          Buscar
                      </button>
      
                      
                     
                  </form>
              </div>
          </div>
          </div>
  
  )
}
