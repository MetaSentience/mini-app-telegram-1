import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../config/axios.config'
import { Ranking } from '../interfaces/ranks.type'

const RewardPage = () => {
  const [ranking, setRanking] = useState<Ranking | null>(null)
  const navigate = useNavigate()
  const handleContinue = () => {
    navigate('/')
  }

  useEffect(() => {
    const userId = WebApp.initDataUnsafe?.user?.id ?? null

    if (userId) {
      axios
        .get(`/ranking/id/${userId}`)
        .then(({ data }) => setRanking(data))
        .catch((error) => console.error('Error fetching user data:', error))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white p-4 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-4">You are amazing!</h1>
        <p className="text-lg mt-2">Here is your DUCKS reward</p>
        <div className="my-8">
          <img
            src={
              'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJhdzR4ZmliZHN6dndtYXBla3NjY282eXpkdmNzbDVsNHhheTZ3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S1SnLg08CxnUGqyqha/giphy.webp'
            }
            alt="DUCK"
            className="mx-auto w-3/4"
          />
          <p className="text-4xl font-bold mt-4">{ranking?.totalScore ?? 0}</p>
        </div>
        <p className="mt-4 font-bold">
          Thanks for your time on Telegram
          <span role="img" aria-label="Handsahake">
            🤝
          </span>
        </p>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-5 z-50 bg-black ">
        <button
          onClick={handleContinue}
          className="w-full p-3 bg-white rounded-lg text-black">
          Continue
        </button>
      </div>
    </div>
  )
}

export default RewardPage
