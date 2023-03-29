import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar " >
        <Link to='/'>Ecommerce</Link>
        <div className="Categories">
            <NavLink to='/category/celular' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
            <NavLink to='/category/tablet' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
            <NavLink to='/category/notebook' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar