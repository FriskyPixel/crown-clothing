import Styles from './directory-item.styles.js';

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <Styles.Container>
      <Styles.BackgroundImage imageurl={imageUrl} />
      <Styles.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Styles.Body>
    </Styles.Container>
  );
};

export default DirectoryItem;
