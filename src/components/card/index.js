import './card.css'
import { useDispatch } from 'react-redux'
import {increment, decrement, remove} from '../../redux/actions'

function Card(props) {

  
    const dispatch = useDispatch();

    const inc = () => {
        props.find(props.product.id, 'inc')
        dispatch(increment(props.product.price))
    }

    const dec = () => {
        props.find(props.product.id, 'dec')
        dispatch(decrement(props.product.price))
    }

    const rem = () => {
        props.remove(props.product.id);

        const productData = {
            quantity: props.product.quantity,
            price: props.product.price
        }

       dispatch(remove(productData))

    }

    return (
        <div className="card">

            <div className="prod-img">
                <img src={props.product.photo} alt="product-icon"/>

                <div className="prod-details">
                    <p className="prod-name">{props.product.name}</p>
                    <p className="prod-price">$ {props.product.price}</p>
                </div>
            </div>


            <div className="counter">
                <i class="fas fa-chevron-left" onClick={() => dec()}></i>
                <p>{props.product.quantity}</p>
                <i class="fas fa-chevron-right" onClick={() => inc()}></i>
            </div>
            <div className="trash">
                <i class="fas fa-trash" onClick={() => rem()}></i>
            </div>


        </div>
    )

}

export default Card;