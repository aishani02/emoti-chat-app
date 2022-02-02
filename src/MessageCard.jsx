import { getAuth } from 'firebase/auth'

function MessageCard({ owner, msg_body }) {
  const auth = getAuth()

  return (
    <>
      <div
        className={`${
          auth.currentUser.uid === owner ? 'self-end text-black' : 'text-white'
        } my-3`}
      >
        <div className='card shadow-lg py-3 bg-green-500 w-50'>
          <div
            className={`card-body ${
              owner === auth.currentUser.uid ? 'bg-gray-100' : 'bg-neutral'
            } py-4`}
          >
            <p className='w-60'>{msg_body}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageCard
