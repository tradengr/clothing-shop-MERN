import { 
  Routes, 
  Route, 
} from 'react-router-dom';

import NavBar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>Shop Page</h1>
}

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