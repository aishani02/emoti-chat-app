import { Navigate, Outlet } from 'react-router-dom'
import Spinner from './Spinner'
import useAuthStatus from './useAuthStatus'

function PrivateRoute() {
  const { loggedIn, checkStatus } = useAuthStatus()

  if (checkStatus) {
    return <Spinner />
  } else {
    return loggedIn ? <Outlet /> : <Navigate to='/' />
  }
}

export default PrivateRoute
