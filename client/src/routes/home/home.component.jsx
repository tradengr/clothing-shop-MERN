import { Outlet } from 'react-router-dom';

import CategoryList from '../../components/categoryList/categoryList.component';

const Home = () => {
  return (
    <>
      <Outlet />
      <CategoryList />
    </>
  );
}

export default Home; 