import { 
  Routes, 
  Route, 
} from 'react-router-dom';

import NavBar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </>
  );
}

export default App;