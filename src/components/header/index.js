import './header.css';
import { useSelector } from 'react-redux'


function Header() {

    const cartQuantity = useSelector(state => state.cartQuantity)
    
    return (
        <div className="header">
            <div className="header-content">
                <h1>ReactCart</h1>
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>{cartQuantity}</span>
                </div>
            </div>

        </div>
    )
}

export default Header;