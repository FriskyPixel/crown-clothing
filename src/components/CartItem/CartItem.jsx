import Styles from './cart-item.styles.js';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Styles.Container>
      <img src={imageUrl} alt={name} />
      <Styles.ItemDetails>
        <Styles.Name>{name}</Styles.Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </Styles.ItemDetails>
    </Styles.Container>
  );
};

export default CartItem;
