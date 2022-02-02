import { useContext } from 'react'
import GlobalContext from './GlobalContext'
import ChatUserCard from './ChatUserCard'

function SearchedChatUsers({ users }) {
  return (
    <div className='searched-chat-users '>
      {/* <!-- chat-user-card --> */}

      {users.map((user) => {
        return (
          <ChatUserCard
            key={user.uid}
            uid={user.uid}
            name={user.name}
            image={user.image}
          />
        )
      })}
    </div>
  )
}

export default SearchedChatUsers
