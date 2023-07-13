import { useNavigate } from 'react-router-dom';
import Styles from './directory-item.styles.js';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Styles.Container onClick={onNavigateHandler}>
      <Styles.BackgroundImage imageurl={imageUrl} />
      <Styles.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Styles.Body>
    </Styles.Container>
  );
};

export default DirectoryItem;
