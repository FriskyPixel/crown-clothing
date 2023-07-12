import styled, { css } from 'styled-components';

const width = css`
  width: 23%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.span`
  ${width};
`;

const Quantity = styled.div`
  display: flex;
  ${width};
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.span`
  margin: 0 10px;
`;

const Price = styled.span`
  ${width};
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const Styles = {
  Container,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
};

export default Styles;
