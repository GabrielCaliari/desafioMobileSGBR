import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Carregando...</Text>
    </LoadingContainer>
  );
};

export default LoadingScreen;
