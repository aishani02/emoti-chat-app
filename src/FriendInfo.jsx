import { ReactComponent as BellIcon } from './assets/svg/bellIcon.svg'
import { ReactComponent as FileIcon } from './assets/svg/fileIcon.svg'
import Avatar from './Avatar'
function FriendInfo({ name, image }) {
  return (
    <>
      <div className='friend'>
        {/* <!-- friend navbar --> */}
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-gray-400 text-lg'>
            21 October , 2020
          </h2>
          <div className='online p-1'>
            <BellIcon />
          </div>
        </div>

        {/* <!-- Friend profile    --> */}

        <div className='flex flex-col items-center justify-center grow   border-b-2'>
          <Avatar size={24} url={image} />

          <h1 className='font-sans text-2xl font-semibold'>{name}</h1>
          <p className='font-light text-sm font-sans pb-3'>{`@${name}`}</p>
        </div>

        {/* 
<!-- Shared File --> */}

        <div className='flex flex-col '>
          <div className='flex justify-between items-center '>
            <h3 className='text-xl font-semibold  mb-2 '>Shared Files</h3>
            <button className='btn btn-link normal-case pr-0'>See all</button>
          </div>

          {/* 
<!-- Files --> */}

          <div className='flex flex-col '>
            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <FileIcon />

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <FileIcon />

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <FileIcon />

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <FileIcon />

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>
          </div>
        </div>

        {/* <!-- Shared Link --> */}

        <div className='flex flex-col '>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl font-semibold  mb-2 '>Shared Links</h3>
            <button className='btn btn-link normal-case pr-0'>See all</button>
          </div>

          {/* <!-- Files --> */}

          <div className='flex flex-col '>
            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>
                {/* 
<!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon --> */}

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>

            {/* <!-- Single File --> */}
            <div className='flex items-end '>
              {/* <!-- File Icon -->
               */}

              <div className='flex flex-col grow'>
                {/* <!-- Filename --> */}
                <p className='text-md font-semibold'>References.zip</p>

                {/* <!-- Time Stamp --> */}
                <p className='text-xs font-light'>October 21, 2020 at 21:07</p>
              </div>

              <small className='font-light self-end'>1.8mb</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FriendInfo
