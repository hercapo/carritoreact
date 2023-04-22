
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    return (
        <article className="">
            <header className="mt-6 font-bold text-3xl">
                <h2 className="">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="w-[90%] h-[300px] bg-white gap-3 rounded-xl shadow-md overflow-auto py-4 mx-4 mt-4 mb-4 hover:scale-110 transition duration-150 ease-out hover:ease-in"/>
            </picture>
            <section>
                <p className="flex justify-center font-bold">
                    Categoria: {category}
                </p>
                <p className="flex justify-center font-bold">
                    Descripción: {description}
                </p>
                <p className="flex justify-center font-semibold">
                    Precio: {price}
                </p>
            </section>           
            <footer className='flex justify-center gap-1 items-center'>
                {
                    isInCart(id) ? (
                        
                    
                        <Link to='/cart' className='flex justify-center px-3 py-1 text-white font-light tracking-wider bg-gray-900 rounded'>Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail