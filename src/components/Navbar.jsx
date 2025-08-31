import { Link } from 'react-router-dom'
import { BiEqualizer } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 bg-gray-800 text-white">
      <div className="flex gap-5">
        <Link to="/" className="flex gap-1">
          <BiEqualizer size={24} />
          <div>EarTrainr</div>
        </Link>
        <div>
          <Link to="/Dips">Dips</Link>
        </div>
      </div>
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default Navbar
