import React,{useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)

    const onAdd = () => {
        if(count< stock) {
            setCount(count + 1)
        }
    }
    const resta = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    return(
        <>
            <button onClick={resta}>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
            
        </>
    )
}

export default ItemCount