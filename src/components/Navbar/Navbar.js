import './Navbar.css'
import Button from '../button/Button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    const handleClick = () => {
        console.log('Calzado Deportivo')
        console.log('otra linea')
    }

    return (

        <nav className="container-fluid bg-info d-flex justify-content-between">
            
            <div>
                <h1>Mc.Store Deportes</h1>
            </div>
            
            <div className='container-fluid d-flex justify-content-around align-items-center'>
                <Button label="Deportivo"  callback={handleClick}/>
                <Button label="Trekking" callback={() => console.log('Tablets')}/>
                <Button label="Urban" callback={() => console.log('Notebooks')}/> 
            </div>
            
            <CartWidget/>
        
        </nav>
    )
}

export default Navbar