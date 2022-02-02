function Avatar({ url, size }) {
  return (
    <>
      <div className='avatar'>
        <div className={`mb-2 rounded-full w-${size} h-${size}`}>
          <img src={url} />
        </div>
      </div>
    </>
  )
}

export default Avatar
