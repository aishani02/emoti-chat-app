import { useNavigate } from 'react-router-dom'
import Avatar from './Avatar'

const ChatUserCard = ({ name, image, uid }) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/home/${uid}`)
  }

  return (
    <button
      className='btn btn-ghost h-18 border-0 mb-2 border-b-2'
      onClick={onClick}
    >
      <div className='flex '>
        <Avatar size={10} url={image} />
        <div className='flex flex-col items-start'>
          <p className='font-semibold text-sm pb-2'>{name}</p>
          <p className='font-light text-xs'>Hi our deadlines are !! </p>
        </div>
      </div>
    </button>
  )
}

export default ChatUserCard
