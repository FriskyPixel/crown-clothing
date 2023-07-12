import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Styles = {
  Container,
  ButtonsContainer,
};

export default Styles;
