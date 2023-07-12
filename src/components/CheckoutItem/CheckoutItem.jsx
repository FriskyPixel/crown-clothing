import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Styles from './checkout-item.styles.js';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearProductFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearProductHandler = () => clearProductFromCart(cartItem);

  return (
    <Styles.Container>
      <Styles.ImageContainer>
        <img src={imageUrl} alt={name} />
      </Styles.ImageContainer>
      <Styles.Name>{name}</Styles.Name>
      <Styles.Quantity>
        <Styles.Arrow onClick={removeItemHandler}>&#10094;</Styles.Arrow>
        <Styles.Value>{quantity}</Styles.Value>
        <Styles.Arrow onClick={addItemHandler}>&#10095;</Styles.Arrow>
      </Styles.Quantity>
      <Styles.Price>{price}</Styles.Price>
      <Styles.RemoveButton onClick={clearProductHandler}>
        &#10005;
      </Styles.RemoveButton>
    </Styles.Container>
  );
};

export default CheckoutItem;
