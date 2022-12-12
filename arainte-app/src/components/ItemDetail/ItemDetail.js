import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ListProducts from '../ListProducts/ListProducts'
import React,{ useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import Container from '@mui/material/Container';
import CartContext from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'




export default function ItemDetail ({ data, action }) {    

    const navigate = useNavigate();
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { title, price, stock, image, id } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    //const [ ]

    // useEffect( () => {
    //     console.log("SOLO MONTAJE")
    // },[] )

    // useEffect( () => {
    //     console.log("Siempre que entre en fase ACTUALIZACION")
    // })

    // useEffect( () => {
    //     console.log("SOLO CUANDO CAMBIE COUNT")
    // },[count] )

    // useEffect( () => {
    //     return () => {
    //         console.log("FASE DE DESMONTAJE")
    //     }
    // })
    useEffect( () => {
        console.log("useEffect")
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const changePage = () => {
        navigate(`/productos/${id}`)
    }
    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(data)
    }

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }

    return(
        <Container className="card-item" onClick={changePage}>
            <div className='card-item__img'>
            <img src={`./${image}`} alt={image} />
            </div>
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <ItemCount stock={stock}/>
                <br/>
                <Button onClick={addToCart} variant="outlined" className="buttonCard">agregar al carrito</Button>
                
            </div>
        </Container>
    )
}
