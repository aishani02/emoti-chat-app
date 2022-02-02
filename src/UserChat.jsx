import { useParams } from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import FriendInfo from './FriendInfo'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
function UserChat() {
  const { id } = useParams()

  const { users } = useContext(GlobalContext)
  const { image, name } = users.find((user) => {
    return user.uid == id
  })

  return (
    <>
      <Home />

      <Chat name={name} />
      <FriendInfo name={name} image={image} />
    </>
  )
}

export default UserChat
