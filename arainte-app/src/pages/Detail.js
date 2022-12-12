import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext} from 'react';
import mockProductos from '../Utils/productsMock'
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext'
import ItemCount from '../components/ItemCount/ItemCount'





const DetailPage = () => {
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const getProduct = async() => {
        const docRef = doc(db, "Productos", id);
        const docSnap = await getDoc(docRef);
    
       

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])

    const changePage = () => {
        navigate(`/productos/${id}`)
    }

     const addToCart = (e) => {
            e.stopPropagation()  
            console.log("Productos agregados:", cartProducts) 
            addProductToCart(product)
        }


    return(
        <Container className='container-general' onClick={changePage}> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`} alt="vintage" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>Disfruta y comparte tus mejores fotos al momento con esta cámara instantánea de Kodak. Disponible en dos acabados, esta compacta de bolsillo cuenta con un sensor de imagen y produce impresiones en papel Zink adhesivo.No olvides comprar papel Kodak Zink para tu Printomatic</p>
                <Button onClick={addToCart} variant="outlined" className="buttonCard">COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage