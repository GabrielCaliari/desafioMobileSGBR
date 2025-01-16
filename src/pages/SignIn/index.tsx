import React, { useContext } from 'react';
import { Alert, Text } from 'react-native';
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
} from './styled';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

interface SignInFormData {
  user: string;
  password: string;
}

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();
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

  return (
    <Container>
    <Header>
      <Text>Vai ser uma logo</Text>
    </Header>

    <Animatable.View
      animation="fadeInUp"
      duration={600}
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
