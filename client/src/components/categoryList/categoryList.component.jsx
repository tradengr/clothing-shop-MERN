import CategoryItem from '../categoryItem/categoryItem.component';
import './categoryList.styles.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: './images/hats.png',
    route: '/shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: './images/jackets.png',
    route: '/shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: './images/sneakers.png',
    route: '/shop/sneakers'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: './images/womens.png',
    route: '/shop/womens'
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: './images/men.png',
    route: '/shop/mens'
  },
];

const CategoryList = () => {

  return (
    <div className="categoryList-container">
      {categories.map(category => {
        return (
          <CategoryItem key={category.id} category={category}/>
        )
      })}
    </div>
  );
};

export default CategoryList;