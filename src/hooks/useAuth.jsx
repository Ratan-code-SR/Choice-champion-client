import { useContext } from 'react'
import { AuthContext } from '../components/provider/ContextProvider'


const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
