import googleIcon from './google.png'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
import { ReactComponent as ChatIcon } from './assets/svg/chatIcon.svg'
function Login() {
  console.log('Login page')

  const { onSignIn } = useContext(GlobalContext)

  return (
    <div className='flex items-center justify-around h-screen w-screen'>
      <div className='flex flex-col rounded-full justify-center items-center bg-green-500 shadow-2xl text-white py-20 px-28'>
        <h1 className='font-bold text-5xl'>Welcome </h1>

        <h2 className='font-bold text-3xl'>To</h2>
        <h3 className='font-bold text-2xl'>Emoti Chat </h3>
        <ChatIcon />
        <button className='btn glass my-5' onClick={onSignIn}>
          <img className='mr-3' src={googleIcon} alt='Google Icon' />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
