import { ReactComponent as SearchIcon } from './assets/svg/bigSearchIcon.svg'
import { ReactComponent as DayIcon } from './assets/svg/dayIcon.svg'
import { ReactComponent as NightIcon } from './assets/svg/nightIcon.svg'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
import MessageInput from './MessageInput'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageCard from './MessageCard'
import { io } from 'socket.io-client'
import { auth } from './firebase.config'
import Spinner from './Spinner'

function Chat({ name }) {
  const { id } = useParams()
  const [socket, setSocket] = useState(null)
  const [loading, setLoading] = useState(true)
  const { fetchMessages, messages, fetchSingleMessage } =
    useContext(GlobalContext)

  useEffect(() => {
    const socket = io('http://localhost:3004')

    socket.emit('connect_room', id, auth.currentUser.uid)
    socket.on('Recieve_Message', async (docId) => {
      await fetchSingleMessage(docId)
    })
    setSocket(socket)
  }, [])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await fetchMessages(id)
    }
    fetch()
    if (socket != null) {
      socket.emit('connect_room', id, auth.currentUser.uid)
    }
  }, [id])
  useEffect(() => {
    if (messages.length > 0) {
      setLoading(false)
      setFilteredMessages(messages)
    }
  }, [messages])

  const [filteredMessages, setFilteredMessages] = useState([])
  const searchMsg = (e) => {
    if (e.target.value.trim() === '') {
      setFilteredMessages(messages)
    } else {
      setFilteredMessages(
        messages.filter((message) => {
          return (
            new RegExp(`\\b${e.target.value.trim()}`, 'i').test(
              message.msg_body
            ) && message
          )
        })
      )
    }
  }

  return (
    <>
      <div className='chat shadow-xl'>
        {/* <!-- Search-Messages --> */}
        <div className='chat-nav'>
          <div className='search mt-2 w-full '>
            <span>
              {/* Big Search Icon */}

              <SearchIcon />
            </span>
            <input
              autoFocus
              type='text'
              placeholder='Search for chats...'
              className=' h-full w-full px-4 py-2 text-lg text-semibold '
              onChange={searchMsg}
            />
          </div>

          {/* <!-- Day-Mode --> */}

          <button className='btn btn-warning mx-1 '>
            <DayIcon />
          </button>

          {/* <!-- Moon --> */}

          <button className='btn btn-neutral'>
            <NightIcon />
          </button>
        </div>

        <div className='flex flex-col items-start mb-4 '>
          <p className='text-sm font-light mt-2'>Chat With</p>
          <h1 className='text-3xl font-semibold'>{name}</h1>
        </div>

        {/* <!-- Chat-Field --> */}

        <div className='chat-field pr-2'>
          {!loading ? (
            filteredMessages.map((message, index) => {
              return (
                <MessageCard
                  key={index}
                  owner={message.msg_owner}
                  msg_body={message.msg_body}
                />
              )
            })
          ) : (
            <Spinner />
          )}
        </div>

        {/* <!-- Message-Input --> */}
        <MessageInput socket={socket} />
      </div>
    </>
  )
}

export default Chat
