import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const recommendedRestaurants = [
  {
    id: '1',
    name: 'Orlando Restaurante',
    description: 'Restaurante à la carte especializado em frutos do mar, também disponde de peixes, carnes e massas. Restaurante muito conhecido na região por sabor único.',
    priceRange: 'R$ 30,00 – R$ 121,00',
    image: require('../../assets/OrlandoRestaurante.jpg'),
  },
  {
    id: '2',
    name: 'Gatae Restaurante Japonês',
    description: 'Experimente uma autêntica experiência culinária japonesa em nosso restaurante especializado. Nossa equipe dedicada está pronta para recebê-lo em um ambiente acolhedor e confortável.',
    priceRange: 'R$ 100,00 – R$ 166,00',
    image: require('../../assets/GataeRestaurante.jpg'),
  },
  {
    id: '3',
    name: 'Bere Birra Forneria',
    description: 'Casinha açoriana, ambiente acolhedor, atendimento com amor, comida com propósito.',
    priceRange: 'R$ 30,00 – R$ 49,00',
    image: require('../../assets/Berebirra.jpg'),
  },
  {
    id: '4',
    name: 'Sattoru Sushi',
    description: 'União de técnicas tradicionais e sofisticação de pratos autorais. Ambiente aconchegante, localização privilegiada!',
    priceRange: 'R$ 20,00 – R$ 95,00',
    image: require('../../assets/SattoruSushi.jpg'),
  },
];

const RecommendedRestaurantsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recommendedRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.priceRange}>{item.priceRange}</Text>
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
  priceRange: {
    fontSize: 14,
    color: '#888',
  },
});

export default RecommendedRestaurantsScreen;