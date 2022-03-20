import { useContext } from "react"
import AuthContext from '../../src/AuthProvider/AuthProvider'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth;