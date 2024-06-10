import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const historicalPoints = [
  {
    id: '1',
    name: 'Ponte Hercílio Luz',
    description: 'A Ponte Hercílio Luz é uma ponte pênsil localizada em Florianópolis, no estado brasileiro de Santa Catarina, sendo a mais antiga das três que ligam as partes insular e continental da capital catarinense.',
    image: require('../../assets/ponteh.jpg'),
  },
  {
    id: '2',
    name: 'Dunas da Joaquina',
    description: 'É mundialmente conhecida como melhor lugar do mundo para a prática do Sandboard que consiste em deslizar pelas dunas de areia em uma prancha de madeira de um formato parecido com um skate só que sem as rodinhas.',
    image: require('../../assets/dunas.jpg'),
  },
  {
    id: '3',
    name: 'Fortaleza de São José da Ponta Grossa',
    description: 'A Fortaleza de São José da Ponta Grossa localiza-se entre as praias do Forte e do Jurerê, no litoral do estado de Santa Catarina, no Brasil. Ergue-se em posição dominante na encosta do morro da Ponta Grossa, a noroeste da ilha de Santa Catarina, dominando a baía Norte.',
    image: require('../../assets/fortaleza.jpg'),
  },
  {
    id: '4',
    name: 'Praça XV de Novembro',
    description: 'A Praça XV de Novembro, também chamada popularmente apenas como Praça XV ou ainda Praça da Figueira, é uma praça situada no bairro Centro, na cidade de Florianópolis. Ela fica no local onde foi fundada a cidade, tendo partido dali a povoação da então Vila de Nossa Senhora do Desterro.',
    image: require('../../assets/praca.jpg'),
  },
];

const HistoricalPointsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={historicalPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
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
  },
});

export default HistoricalPointsScreen;