import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';

import NavBar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { httpGetUser } from './apis/backendAPI';
import { setCurrentUser } from './redux/user/user.slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    httpGetUser().then(res => dispatch(setCurrentUser(res.data)));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/shop/*' element={<Shop/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;