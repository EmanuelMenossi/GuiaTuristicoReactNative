import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/'

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/background.webp')} style={styles.Background}>
        <View style={styles.overlay} />
        <View style={styles.textbackground}>
        <Text style={styles.title}>Guia Turístico </Text>
        <Text style={styles.title}>Florianópolis</Text>
        </View>

        </ImageBackground>

      <View style={styles.menuItem} >
        <ImageBackground source={require('../../assets/ponte.jpg')} style={styles.imageBackground}>
        <View style={styles.overlay} />
        <Text style={styles.textButton}> Pontos Turístico</Text>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Historic Points')}>Ver mais</Text>
        </ImageBackground>
      </View>

      <View style={styles.menuItem} >
        <ImageBackground source={require('../../assets/Restaur.png')} style={styles.imageBackground}>
        <View style={styles.overlay} />
        <Text style={styles.textButton}> Restaurantes</Text>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Recommended Restaurants')}>Ver mais</Text>
        </ImageBackground>
      </View>

      <View style={styles.menuItem} >
        <ImageBackground source={require('../../assets/surf.jpg')} style={styles.imageBackground}>
        <View style={styles.overlay} />
            <Text style={styles.textButton}> Atividade no ar livre</Text>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Outdoor Activities')}>Ver mais</Text>
        </ImageBackground>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
      },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  scrollView: {
    flexGrow: 1,
  },

  title: {
    fontSize: 32,
    fontFamily: 'Open Sans',
    textAlign: 'center',
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
  },

  menuItem: {
    marginVertical: 10,
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden', 
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  Background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    
  },

  textButton: {
    fontSize: 24,
    fontFamily: 'Open Sans',
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
  },


  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 6,
    padding: 10,
  },
});

export default HomeScreen;