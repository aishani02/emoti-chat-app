import { ReactComponent as LogoutIcon } from './assets/svg/logoutIcon.svg'
import { toast } from 'react-toastify'
import { signOut, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Logout() {
  const navigate = useNavigate()
  const onLogout = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      navigate('/')
    } catch (err) {
      toast.error('Something went Wrong in Logout')
    }
  }

  return (
    <button className='btn btn-square btn-ghost' onClick={onLogout}>
      <LogoutIcon />
    </button>
  )
}

export default Logout
