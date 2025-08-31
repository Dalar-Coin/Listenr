import Navbar from '../../components/Navbar'
import Graph from '../../components/Graph'
import EQ from '../../components/EQ'
import Footer from '../../components/Footer'

const Dips = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <div className="container mx-auto grow">
        <Graph />
        <EQ />
      </div>
      <Footer />
    </div>
  )
}

export default Dips
