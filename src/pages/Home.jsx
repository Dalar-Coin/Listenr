import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 mb-15">
        <div className="flex justify-evenly text-center border 5 rounded-lg p-5 grid grid-cols-3 content-end gap-10">
          <a
            onClick={() => navigate('/Peaks')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Peaks</div>
            <div>Img</div>
          </a>
          <a
            onClick={() => navigate('/Dips')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Dips</div>
            <div>Img</div>
          </a>
          <a
            onClick={() => navigate('/PeaksDips')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Peaks/Dips Combined</div>
            <div>Img</div>
          </a>
          <a
            onClick={() => navigate('/Peaks')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Peaks</div>
            <div>Img</div>
          </a>
          <a
            onClick={() => navigate('/Dips')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Dips</div>
            <div>Img</div>
          </a>
          <a
            onClick={() => navigate('/PeaksDips')}
            className="border 2 border-gray-400 rounded-lg p-20"
          >
            <div>Peaks/Dips Combined</div>
            <div>Img</div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
