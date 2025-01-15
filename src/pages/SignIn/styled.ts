import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput<{ hasError: boolean }>`
  width: 100%;
  padding: 10px;
  border-width: 1px;
  border-color: ${(props) => (props.hasError ? '#ff4d4d' : '#ddd')};
  border-radius: 5px;
  background-color: #fff;
`;

export const ErrorMessage = styled.Text`
  color: #ff4d4d;
  margin-top: 5px;
  font-size: 12px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
