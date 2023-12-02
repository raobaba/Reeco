import React from 'react';
import styled from 'styled-components';

const ReecoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ReecoText = styled.div`
  font-size: 24px;
  text-align: center;
`;

function Reeco() {
  return (
    <ReecoContainer>
      <ReecoText>Reeco Uder Process</ReecoText>
    </ReecoContainer>
  );
}

export default Reeco;
