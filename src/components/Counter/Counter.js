import { useState } from 'react'
import Button from '../button/Button'

const Counter = () => {
    const [count, setCount] = useState(0)


    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        for(let i = 0; i < 1; i++) {
            setCount(prev => {
                console.log(prev)
                return prev + 1
            })
        }
    }
   
    return (
        <div className='container-fluid display flex bg-warning'>
            <h1>{count}</h1>
            <Button callback={decrement} label={'decrementar'}/>
            <Button callback={increment} label={'increment'}/>
        </div>
    )
}

export default Counter