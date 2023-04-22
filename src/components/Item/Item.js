
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price }) => {

    
    return (
        <div className='flex flex-col justify-between items-center mt-5 w-[90%] h-[300px] bg-white gap-3 rounded-xl shadow-md overflow-auto py-2 container mx-1 hover:scale-110 transition duration-150 ease-out hover:ease-in'>
            <h1 className='font-bold font-sans text-2xl'>{name}</h1>
            <img src={img} alt={name} className="flex items-center max-h-[120px]"/>
            <p className='text-gray-600'> Precio: ${price}</p>
            <div className='flex justify-center items-center gap-1'>
            <Link to ={`/item/${id}`}  className='px-3 py-1 text-white font-light tracking-wider bg-black rounded hover:opacity-75'>Ver Detalle </Link>
            </div>
        </div>
    )
}

export default Item