import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';

import { UserContext } from "../../contexts/user.contexts";
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navbar.styles.scss';

const NavBar = () => {
  const currentUser = useContext(UserContext);

  const handleSignOut = async () => {
    const response = await axios.delete('http://localhost:8000/signout', {
      withCredentials: true
    });

    if (response.status === 200)
      window.location.replace('/auth');
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {currentUser 
            ? (<Link className='nav-link' onClick={handleSignOut}>SIGN OUT</Link>)
            : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar;