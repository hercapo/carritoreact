import { useState } from "react"
const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <div className="flex text-center justify-center">
        <form className="justify-center text-center max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
    <p className="text-gray-800 font-medium flex text-center">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-00" for="cus_name">Name</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="mt-2">
      <label className="hidden-block text-sm text-gray-600" for="cus_email">Phone</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Phone" aria-label="Email"value={phone} onChange={(e) => setPhone(e.target.value)}></input>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" for="cus_email">Email</label>
      <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <p className="mt-2 text-gray-800 font-medium">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"></input>
    </div>
    <div className="mt-10">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Finalizar Compra
      
      </button>
    </div>
    </form>
    </div>
    
    )
}

export default ContactForm