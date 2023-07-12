import ProductCard from '../ProductCard/ProductCard';
import Styles from './category-preview.styles.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <Styles.Container>
      <h2>
        <Styles.Title to={title}>{title.toUpperCase()}</Styles.Title>
      </h2>
      <Styles.Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Styles.Preview>
    </Styles.Container>
  );
};

export default CategoryPreview;
