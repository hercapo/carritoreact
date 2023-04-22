
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='flex flex-col items-center'>          
            <div className='flex justify-between items-center m-3'>
                <button className="flex items-center mx-1 px-3 py-1 text-white font-light tracking-wider bg-gray-900 rounded" onClick={decrement}>-</button>
                <h4 className='flex items-center font-bold'>{quantity}</h4>
                <button className="flex items-center mx-1 px-3 py-1 text-white font-light tracking-wider bg-gray-900 rounded" onClick={increment}>+</button>
            </div>
            <div>
                <button className="flex justify-center px-3 py-1 text-white font-light tracking-wider bg-gray-900 rounded" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount