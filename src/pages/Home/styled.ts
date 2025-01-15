import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const BrandItem = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  margin: 5px 0;
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 2px;  /* Corrigido aqui */
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  elevation: 5;
`;
export const NameUser = styled.Text`
  font-size: 30px;
`;

export const ButtonSignOut = styled.Button``;
