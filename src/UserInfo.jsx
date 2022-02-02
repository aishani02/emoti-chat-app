import { ReactComponent as SearchIcon } from './assets/svg/searchIcon.svg'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
import SearchedChatUsers from './SearchedChatUsers'
import { useEffect, useState } from 'react'
import Avatar from './Avatar'
function UserInfo() {
  const {
    signInData: { displayName, photoURL },
    users,
  } = useContext(GlobalContext)

  const [filteredUsers, setFilteredUsers] = useState(users)

  const searchUsers = (e) => {
    if (e.target.value === '') {
      setFilteredUsers(users)
    } else {
      setFilteredUsers(
        users.filter((user) => {
          console.log(e.target.value)
          return (
            new RegExp(`\\b${e.target.value}`, 'ig').test(user.name) && user
          )
        })
      )
    }
  }

  return (
    <>
      <div className=' info px-16 bg-gray-100  '>
        <div className='flex flex-col    pt-24 pb-10 items-center border-b-2'>
          <Avatar url={photoURL} size={24} />
          <h1 className='font-sans text-2xl font-semibold'>{displayName}</h1>
          <p className='font-light text-sm font-sans'>My account</p>
        </div>

        <div className='online-info  border-b-2'>
          <h3 className='text-lg font-semibold  mb-2 '>Online now</h3>

          <div className='-space-x-0 avatar-group'>
            <div className='avatar online'>
              <div className='w-10 h-15 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src='http://daisyui.com/tailwind-css-component-profile-1@40w.png'
                  alt='avatar-group'
                />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-10 h-15'>
                <img src='http://daisyui.com/tailwind-css-component-profile-2@40w.png' />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-10 h-15'>
                <img src='http://daisyui.com/tailwind-css-component-profile-3@40w.png' />
              </div>
            </div>
            <div className='avatar'>
              <div className='w-10 h-15'>
                <img src='http://daisyui.com/tailwind-css-component-profile-5@40w.png' />
              </div>
            </div>
            <div className='avatar placeholder'>
              <div className='w-10 h-15 rounded-full bg-neutral-focus text-neutral-content'>
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>

        <div className='chat-info border-b-2 grow'>
          <h1 className='text-medium font-semibold font-sans'>Chats</h1>

          <div className='search mt-2'>
            <span>
              <SearchIcon />
            </span>
            <input
              autoFocus
              type='text'
              placeholder='Search for chats'
              className='bg-gray-100 px-2 text-sm text-semibold '
              onChange={searchUsers}
            />
          </div>

          {/* <!-- Searched-Chat-Users --> */}

          <SearchedChatUsers users={filteredUsers} />
        </div>
      </div>
    </>
  )
}

export default UserInfo
