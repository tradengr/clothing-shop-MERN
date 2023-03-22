import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { httpSignoutUser } from "../../apis/backendAPI";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../../components/cartIcon/cartIcon.component";
import CartDropdown from "../../components/cartDropdown/cartDropdown.component";

import './navbar.styles.scss';

const NavBar = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser)

  const { isCartOpen } = useContext(CartContext)

  // const viewCart = (event) => {
  //   // setIsCartOpen(!isCartOpen);
  //   console.log('click')
  // }

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
        {isCartOpen ? (<CartDropdown/>) : null}
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default NavBar;