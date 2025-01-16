import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import { HomeContainer, Header, BrandItem, NameUser, ButtonSignOut, UserAvatar, UserWrapper, UserInfo, SearchInput, SearchButton, SearchWrapper } from './styled';
import { Ionicons, FontAwesome} from '@expo/vector-icons'; // Para o ícone de logout

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
            <NameUser>Olá, {user?.name}</NameUser>
          </UserInfo>
          <ButtonSignOut onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={30} color="#000" />
          </ButtonSignOut>
        </UserWrapper>
      </Header>

      <SearchWrapper>
      <SearchInput
    placeholder="Pesquise por marca"
    value={searchText}
    onChangeText={handleSearchTextChange}
    />

      </SearchWrapper>

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
