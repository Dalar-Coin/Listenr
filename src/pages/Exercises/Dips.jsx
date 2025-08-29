import React from 'react'
import Navbar from '../../components/navbar'
import Graph from '../../components/Graph'
import EQ from '../../components/EQ'

const Dips = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Graph />
        <EQ />
      </div>
    </div>
  )
}

export default Dips
