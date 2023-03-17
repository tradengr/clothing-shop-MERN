import { 
  Routes, 
  Route, 
} from 'react-router-dom';

import NavBar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Signin from './routes/signin/signin.component';

const Shop = () => {
  return <h1>Shop Page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>} >
        <Route index element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/shop' element={<Shop/>} />
      </Route>
    </Routes>
  );
}

export default App;