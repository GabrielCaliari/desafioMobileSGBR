// screens/Home.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';  // Importando o AuthContext
import axios from 'axios';
import { HomeContainer, Header, BrandItem, NameUser } from './styled';



const Home: React.FC = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        setBrands(response.data);
      } catch (error) {
        console.error('Erro ao buscar marcas:', error);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandPress = (brandId: number) => {
    navigation.navigate('Model', { brandId });
  };

  return (
    <HomeContainer>
      <Header>
        <NameUser>Olá, {user?.name}</NameUser>
        {/* <Button title="Sair" onPress={signOut} />  Usando o signOut do AuthContext */}
      </Header>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <BrandItem onPress={() => handleBrandPress(item.codigo)}>
            <Text>{item.nome}</Text>
          </BrandItem>
        )}
      />
    </HomeContainer>
  );
};

export default Home;
