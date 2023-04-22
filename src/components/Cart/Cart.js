import React from "react"
import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'







const Cart = () => {
    const { cart, total, clearCart,} = useCart()

    

    return (
        
        <div className="flex flex-col justify-between" >

        <div>
          
            <h1 className="text-normal p-4">Tu Compra</h1>
            
        </div>
        
            <div>
                {
                    cart.map(prod => {
                        return (
                            
                            <div className="flex justify-center" key={prod.id}>
                                
                                <h2>{prod.name}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>${prod.price} x Unidad</h2>
                            </div>
                        )
                    })
                }
            </div>
            
        <div className="flex flex-col m-2">
            <h1>Total de la compra ${total}</h1>
            <div className="m-2">
            <button className="px-4 py-1 text-white font-light tracking-wider bg-red-900 rounded" onClick={() => clearCart()}>Eliminar Del Carrito</button>
            </div>
            <div className="m-2">
            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">
            <Link to='/checkout' className="m-5">Comprar Producto</Link>
            </button>
            </div>
        </div>
        </div>
    )
}

export default Cart