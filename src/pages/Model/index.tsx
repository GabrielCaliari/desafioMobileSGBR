// screens/Model.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Back,   ModelContainer, ModelItem } from './styled';
import { Ionicons } from '@expo/vector-icons';


interface ModelScreenParams {
  brandId: number;
}

const Model: React.FC = () => {
  const navigation = useNavigation();
  const [models, setModels] = useState<any[]>([]);
  const route = useRoute<RouteProp<any, 'Model'>>();
  const { brandId } = route.params;

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`);
        setModels(response.data.modelos);
      } catch (error) {
        console.error('Erro ao buscar modelos:', error);
      }
    };

    fetchModels();
  }, [brandId]);

  const BackButton = () => {
    const navigation = useNavigation();

  }

  return (
    <ModelContainer>
        <Back onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Back>
      <FlatList
        data={models}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <ModelItem>
            <Text>{item.nome}</Text>
          </ModelItem>
        )}
      />
    </ModelContainer>
  );
};

export default Model;
