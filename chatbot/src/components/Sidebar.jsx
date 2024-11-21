import { Link } from 'react-router-dom'
import Hermes from '../hermesAI.png'

const Sidebar = ({show}) => {
  return (
    <div className={show ? 'sidebar active' : 'sidebar'}>
      <img src={Hermes} alt='logo' className='logo' />
      <ul>
        <li>
          <Link to="/">Chatt</Link>
     </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar