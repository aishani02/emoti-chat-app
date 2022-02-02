import GlobalContext from './GlobalContext'
import { useContext } from 'react'
import Avatar from './Avatar'
import { ReactComponent as SmileyIcon } from './assets/svg/smileyIcon.svg'
import { ReactComponent as SendIcon } from './assets/svg/sendIcon.svg'
import { ReactComponent as AttachmentIcon } from './assets/svg/attachmentIcon.svg'
import 'emoji-picker-element'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth } from './firebase.config'
const MessageInput = ({ socket }) => {
  const { id } = useParams()
  const {
    signInData: { photoURL },

    pushMessage,
  } = useContext(GlobalContext)

  const [inputMessage, setInputMessage] = useState('')

  const onInputMessage = (e) => {
    setInputMessage(e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    const message = inputMessage
    setInputMessage('')
    const docId = await pushMessage(message, id)
    //Emit new Message sent to a particular client
    socket.emit('fetch_message', id, auth.currentUser.uid, docId)
  }

  return (
    <>
      <form className='message-input mt-4' onSubmit={onSubmit}>
        <Avatar size={10} url={photoURL} />

        <div className='input_message'>
          <input
            type='text'
            className='w-full py-1 text-sm'
            placeholder='Write some message to your friend...'
            value={inputMessage}
            onChange={onInputMessage}
          />

          {/* File-Input-Attachment-Icon */}

          <label className='mr-2'>
            <input className='attachment_input' type='file' multiple />
            <AttachmentIcon />
          </label>

          {/* <!-- Smiley - Icon --> */}

          <SmileyIcon />
        </div>

        <button className='btn bg-[#258C60]'>
          <SendIcon />
        </button>
      </form>
    </>
  )
}

export default MessageInput
