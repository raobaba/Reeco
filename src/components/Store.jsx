import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StoreText = styled.div`
  font-size: 24px;
  text-align: center;
`;

function Store() {
  return (
    <StoreContainer>
      <StoreText>Store Under Process</StoreText>
    </StoreContainer>
  );
}

export default Store;
