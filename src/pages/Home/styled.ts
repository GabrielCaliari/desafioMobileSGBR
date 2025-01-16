import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 18px;
`;

export const NameUser = styled.Text`
  font-size: 17px;
`;


export const ButtonSignOut = styled.TouchableOpacity`

`;

export const BrandItem = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  margin: 5px 0;
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.5px;
  elevation: 5;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export const SearchButton = styled.Button`
  background-color: #007bff;  /* Cor do botão */
  color: white;  /* Cor do texto */
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 100%;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 15px;
`;
