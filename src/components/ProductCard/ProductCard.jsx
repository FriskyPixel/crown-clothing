import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BUTTON_STYLE } from '../Button/Button';
import Styles from './product-card.styles.js';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Styles.Container>
      <img src={imageUrl} alt={name} />
      <Styles.Footer>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{price}</Styles.Price>
      </Styles.Footer>
      <Styles.AddButton
        buttonStyle={BUTTON_STYLE.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Styles.AddButton>
    </Styles.Container>
  );
};

export default ProductCard;
