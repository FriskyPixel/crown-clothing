import DirectoryItem from '../DirectoryItem/DirectoryItem';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ title, imageUrl, id }) => (
        <DirectoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default Directory;
