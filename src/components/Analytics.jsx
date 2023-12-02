import React from 'react';
import styled from 'styled-components';

const AnalyticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AnalyticsText = styled.div`
  font-size: 24px;
  text-align: center;
`;

function Analytics() {
  return (
    <AnalyticsContainer>
      <AnalyticsText>Analytics Under Process</AnalyticsText>
    </AnalyticsContainer>
  );
}

export default Analytics;
