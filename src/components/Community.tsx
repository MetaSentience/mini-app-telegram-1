export const Community = () => {
  const handleJoinClick = () => {
    window.open('https://t.me/sparkmindsdev', '_blank')
  }

  return (
    <div className="bg-custom-dark text-white p-6 rounded-lg mt-4 ml-3 mr-3 mx-auto">
      <h2 className="text-xl font-bold">PIDORAS COMMUNITY</h2>
      <p className="text-sm mt-2">Home for Telegram Sparkminds</p>
      <button
        onClick={handleJoinClick}
        className="mt-4 bg-white text-black font-bold py-2 px-4 rounded-full">
        Join
      </button>
    </div>
  )
}
