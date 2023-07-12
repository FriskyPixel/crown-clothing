import DirectoryItem from '../DirectoryItem/DirectoryItem';
import Styles from './directory.styles.js';

const Directory = ({ categories }) => {
  return (
    <Styles.Container>
      {categories.map(({ title, imageUrl, id }) => (
        <DirectoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </Styles.Container>
  );
};

export default Directory;
