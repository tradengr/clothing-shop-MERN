import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartContext } from "../../contexts/cart.context";
import { httpSignoutUser } from "../../apis/backendAPI";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../../components/cartIcon/cartIcon.component";
import CartDropdown from "../../components/cartDropdown/cartDropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";

import './navbar.styles.scss';

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo-icon"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser 
            ? (<Link className='nav-link' onClick={httpSignoutUser}>SIGN OUT</Link>)
            : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && (<CartDropdown/>)}
      </div>
    </>
  )
}

export default NavBar;