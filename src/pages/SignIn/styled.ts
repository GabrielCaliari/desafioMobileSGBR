import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color:blue;
  `;

export const Header = styled.View`
    margin-top: 20%;

    padding-horizontal: 5%;
  `;

export const ViewText = styled.View`
    align-items: center;
    justify-content: center;
    padding: 70px 20px 20px 0
  `;

export const Title = styled.Text`
  font-size: 24px;

  color: black;

`;

export const InputContainer = styled.View`

  margin: 20px 20px 0px 20px;
`;

export const Input = styled.TextInput<{ hasError?: boolean }>`
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#ccc')};
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;


export const ErrorMessage = styled.Text`
  color: #ff4d4d;
  margin-top: 5px;
  font-size: 12px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 25px;
  justify-content: center;
  width: 90%;
  align-items: center;
  margin: 30px 0 0 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const LinkText = styled.Text`
margin: 50px 0 0 55px;

`;

export const LinkTO = styled.TouchableOpacity``;

export const ViewTO = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px 10px 0 10px;
`;

export const TOIcons = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 50px;
  flex-direction: row;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 170px;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

