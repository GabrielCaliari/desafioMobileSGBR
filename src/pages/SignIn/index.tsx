import React, { useContext, useState } from 'react';
import { Alert, Text, TextInputProps } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  ButtonText,
  Container,
  ErrorMessage,
  Input,
  InputContainer,
  SubmitButton,
  Title,
  Header,
  ViewText,
  LinkText,
  LinkTO,
  TOIcons,
  ViewTO,
  Logo,
} from './styled';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

interface SignInFormData {
  user: string;
  password: string;
}

interface InputProps extends TextInputProps {
  secureTextEntry?: boolean;
}

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const [currentSecure, setCurrentSecure] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data.user, data.password);
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert('Erro de Login', 'Usuário e/ou senha incorreta');
    }
  };

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  return (
    <Container>
    <Header>
       <Logo source={require('../../assets/sgbrlogo.png')} />
    </Header>

    <Animatable.View
      animation="fadeInUp"
      style={{
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 80,
        backgroundColor: '#fff',
        paddingHorizontal: 20,

      }}
    >
      <ViewText>
      <Title>Login</Title>
      </ViewText>
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
          <InputContainer >
            <Input
              placeholder="Senha"
              secureTextEntry={currentSecure}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              hasError={!!errors.password}
            />
             <Feather
            style={{
              position: "absolute",
              right: 14,
              top: 22,
             }}
            onPress={handleOnPressEye}
            name={currentSecure ? 'eye-off' : 'eye'}
            size={20}
            color="black"
          />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputContainer>
        )}
      />
      <SubmitButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>

    <ViewTO>
        <TOIcons>
          <Ionicons name="logo-apple" size={24} color="#fff" />
        </TOIcons>



        <TOIcons>
          <FontAwesome name="google" size={24} color="#fff" />
        </TOIcons>


        <TOIcons>
         <FontAwesome name="facebook" size={24} color="#fff" />
        </TOIcons>

    </ViewTO>

      <LinkTO>
      <LinkText>Não possui uma conta? Registre-se agora</LinkText>
      </LinkTO>
    </Animatable.View>
  </Container>
  );
};

export default SignIn;
