import styled from 'styled-components';
import Button from '../Button/Button';

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CheckoutButton = styled(Button)`
  margin-top: auto;
`;

const Styles = {
  Container,
  CartItems,
  EmptyMessage,
  CheckoutButton,
};

export default Styles;
