// import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CategoryList from '../../components/categoryList/categoryList.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCurrentUserIsLoading } from '../../redux/user/user.selector';

const Home = () => {
  const isLoading = useSelector(selectCurrentUserIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryList />
      )}
    </>
  );
}

export default Home; 