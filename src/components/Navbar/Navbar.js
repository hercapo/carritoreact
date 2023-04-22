import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(categoriesRef)
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setCategories(categoriesAdapted)
      })
  }, [])

  console.log(categories)
  return (
    <nav className="NavBar" >
        <Link to='/'>Ecommerce</Link>
        <div className="Categories">
          {
            categories.map(cat => {
              return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            })
          }
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar