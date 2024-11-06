import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          À propos de Teoractive
        </Text>

        <Text>
          Teoractive a pour objectif de fournir une 
          réalité exacte sur l'etat de la météo selon la 
          localité , la ville, le pays où l'utilisateur 
          souhaite s'y rendre.
        </Text>
      </View>

      <View>
        <Text>
          L'intéret est de pouvoir permettre aux utilisateur 
          de transmettre les informations pour confirmer 
          l'état exact de la meteo de là où il se trouve.
        </Text>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
