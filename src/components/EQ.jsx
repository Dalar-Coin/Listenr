import { useState } from 'react'

const EQ = () => {
  const [rank, setRank] = useState([{ id: 1 }])

  const rankUp = () => {
    setRank((r) => [
      ...r,
      {
        id: r.length + 1,
      },
    ])
  }
  const rankDown = () => {
    setRank((r) => (r.length > 1 ? r.slice(0, -1) : r))
  }

  return (
    <div>
      <div className="grid grid-flow-col auto-cols-fr mx-5 mr-2 ml-8 -mt-108.5 mb-10 justify-center">
        <div className="border h-97.5 mr-0.5 hover:bg-indigo-100 hover:opacity-50 transition-all"></div>
        {rank.map((item) => (
          <button
            key={item.id}
            className="border mr-0.5 hover:bg-indigo-100 hover:opacity-50 transition-all"
          ></button>
        ))}
      </div>
      <div className="flex">
        <div className="p-2">
          <button
            onClick={rankUp}
            className="border rounded-lg p-2 hover:bg-indigo-100 hover:opacity-50 transition-all"
          >
            Test Rank Up
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={rankDown}
            className="border rounded-lg p-2 hover:bg-indigo-100 hover:opacity-50 transition-all"
          >
            Test Rank Down
          </button>
        </div>
        <div
          className=" w-full h-px max-w-6xl mx-auto py-1"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)',
          }}
        ></div>
      </div>
    </div>
  )
}

export default EQ
