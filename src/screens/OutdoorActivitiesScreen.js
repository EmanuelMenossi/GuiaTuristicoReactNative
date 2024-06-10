import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const outdoorActivities = [
  {
    id: '1',
    name: 'Aula de Surf com Instrutor Qualificado em Florianópolis',
    description: 'A aula de surf conta com turmas pequenas, de no máximo 5 pessoas, o que torna a experiência mais positiva para os participantes.',
    price: 'A partir de R$ 200,00',
    image: require('../../assets/AulaSurf.jpg'),
  },
  {
    id: '2',
    name: 'Sandboard Experience by Adrenailha',
    description: 'Caminhe em direção ao mar, por entre a floresta para acessar um dos mais belos campos de Dunas do Brasil, em uma das áreas de preservação mais importantes de Floripa.',
    price: 'A partir de R$ 250,00',
    image: require('../../assets/Sand.jpg'),
  },
  {
    id: '3',
    name: 'Trilha pela Lagoinha do Leste em Florianopolis',
    description: 'Certamente esta é uma das trilhas mais bonitas do Brasil. Um cenário exuberante de natureza selvagem que irá surpreender o visitante.',
    price: 'A partir de R$ 377,70',
    image: require('../../assets/Trilha.jpg'),
  },
  {
    id: '4',
    name: 'Rafting Aventura na Apuama',
    description: 'Uma aventura única com muita adrenalina em um dos principais rios da Grande Florianópolis, conecte-se à natureza e com as pessoas que você ama nessa atividade inesquecível!',
    price: 'A partir de R$ 160,00',
    image: require('../../assets/Bote.jpg'),
  },
];

const OutdoorActivitiesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={outdoorActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default OutdoorActivitiesScreen;