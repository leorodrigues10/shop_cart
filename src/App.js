import './App.css';



import Header from './components/header'
import Card from './components/card'


import sang from './statics/img/samsung.png'
import sang1 from './statics/img/samsung1.png';
import google from './statics/img/google.png';
import xiaomi from './statics/img/xiaomi.png';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from './redux/actions';



function App() {

  const totalPrice = useSelector(state => state.totalPrice)
  const dispatch = useDispatch();

  const [products, setProduct] = useState([
    {
      id: 1,
      name: 'Samsung Galaxy S8',
      price: 50000,
      photo: sang,
      quantity: 1
    },
    {
      id: 2,
      name: 'Google Pixel',
      price: 35000,
      photo: google,
      quantity: 1
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 2',
      price: 45000,
      photo: xiaomi,
      quantity: 1
    },
    {
      id: 4,
      name: 'Samsung Galaxy S7',
      price: 40000,
      photo: sang1,
      quantity: 1
    },
    
  ]);

 
  const findUpdate = (id, action) => {

    const product = products.find(product => product.id === id);
    const index = products.findIndex(prduct => prduct === product);
    let newArr = [...products];

    if (action === 'inc') {

      product.quantity = product.quantity + 1;
      newArr[index] = product;
      setProduct(newArr)

    }

    if (action === 'dec') {
      product.quantity = product.quantity - 1;
      newArr[index] = product;
      setProduct(newArr)
    }

    
  }

  const findRemove = (id) => {
    const newArr = products.filter(product => product.id !== id);
   setProduct(newArr)

  }


  return (

    <div>
      <Header />
      <div className="container">

        {
          products.length !== 0 ? <di className="card-map">
              {
                products.map(product => (
                  <Card find={findUpdate} remove={findRemove} product={product} />
                )) 
              }
              <div className="div-total">
                <h5>Total:</h5>
                <p className="total-price">$ {totalPrice}</p>
              </div>
              <a className="clear-all" onClick={() => {
                setProduct([])
                dispatch(removeAll())
                }}>Clear all</a>
          </di> : <h2>The cart is currently empty</h2>
        }
      </div>
    </div>

  );
}

export default App;
 