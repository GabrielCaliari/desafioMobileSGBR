// screens/Model.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { ModelContainer, ModelItem } from './styled';



interface ModelScreenParams {
  brandId: number;
}

const Model: React.FC = () => {
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

  return (
    <ModelContainer>
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
