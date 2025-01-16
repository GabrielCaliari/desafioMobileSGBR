import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import { HomeContainer, Header, BrandItem, NameUser, ButtonSignOut, UserAvatar, UserWrapper, UserInfo, SearchInput, SearchButton, SearchWrapper, TextBrands, ViewBrands } from './styled';
import {FontAwesome} from '@expo/vector-icons';

const Home: React.FC = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>('');
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

  useEffect(() => {
    if (searchText === '') {
      setFilteredBrands(brands);
    } else {
      setFilteredBrands(
        brands.filter((brand) =>
          brand.nome.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, brands]);

  const handleBrandPress = (brandId: number) => {
    navigation.navigate('Model', { brandId });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredBrands(brands);
    } else {
      setFilteredBrands(
        brands.filter((brand) =>
          brand.nome.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);

  };


  return (
    <HomeContainer>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatar source={require('../../assets/avatar.png')} />
            <NameUser>  Olá, {user?.name}</NameUser>
          </UserInfo>
          <ButtonSignOut onPress={handleSignOut}>
             <FontAwesome name="sign-out" size={24} color="black" />
          </ButtonSignOut>
        </UserWrapper>
      </Header>

     <ViewBrands>
     <TextBrands>Lista de marcas</TextBrands>
      <SearchWrapper>
      <SearchInput
        placeholder="Pesquise por marca"
        value={searchText}
        onChangeText={handleSearchTextChange}
        />
      </SearchWrapper>
     </ViewBrands>


      <FlatList
      data={filteredBrands}
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
