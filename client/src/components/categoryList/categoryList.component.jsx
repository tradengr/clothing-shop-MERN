import CategoryItem from '../categoryItem/categoryItem.component';
import './categoryList.styles.scss';

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: './images/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: './images/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: './images/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: './images/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: './images/men.png',
    },
  ];

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