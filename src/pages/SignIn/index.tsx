import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {ButtonText, Container, ErrorMessage, Input, InputContainer, SubmitButton, Title, } from "./styled";
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

interface SignInFormData {
  user: string;
  password: string;
}

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data.user, data.password);
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert('Erro de Login', error.message || 'Não foi possível realizar o login.');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Controller
        control={control}
        name="user"
        rules={{ required: 'Usuário é obrigatório.' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer>
            <Input
              placeholder="Usuário"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              hasError={!!errors.user}
            />
            {errors.user && <ErrorMessage>{errors.user.message}</ErrorMessage>}
          </InputContainer>
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: 'Senha é obrigatória.' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputContainer>
            <Input
              placeholder="Senha"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              hasError={!!errors.password}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputContainer>
        )}
      />
      <SubmitButton onPress={handleSubmit(onSubmit)} >
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>
    </Container>
  );
};

export default SignIn;

