import styled from 'styled-components';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingBagIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const Styles = {
  Container,
  ShoppingBagIcon,
  ItemCount,
};

export default Styles;
