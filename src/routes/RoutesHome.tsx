
import { Route, Routes} from 'react-router-dom'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { EmailRecoverPassword } from '../components/EmailRecoverPassword'
import { CodeRecoverPassword } from '../components/CodeRecoverPassword'
import { RestorePassword } from '../components/RestorePassword'
import { FormPerson } from '../components/FormPerson'
export const RoutesHome = () => {
  return (

    <>
    
    <Routes>
    <Route index element={<Login/>}/>
    <Route path='/SingUp' element={<Register/>}/>
    <Route path='/EmailRecoverPassword' element={<EmailRecoverPassword/>}/>
    <Route path='CodeRecoverPassword' element={<CodeRecoverPassword/>}/>
    <Route path='/RestorePassword' element={<RestorePassword/>}/>
    <Route path='/FilterPerson' element={<FormPerson/>}/>
    </Routes>

    </>
  )
}
