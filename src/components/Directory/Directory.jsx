import CategoryItem from '../CategoryItem/CategoryItem';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ title, imageUrl, id }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default Directory;
