import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importation du hook de navigation
import style from '@/style';  // Assurez-vous que ce fichier contient un objet avec des couleurs

export default function Search(): JSX.Element {
  const [searchCity, setSearchCity] = useState('');
  const navigation = useNavigation(); // Utilisation du hook useNavigation

  // Fonction qui sera appelée lors de la soumission de la recherche
  const submitSearch = () => {
    if (searchCity.trim() === '') {
      Alert.alert('Erreur', 'Veuillez entrer une ville');
      return;
    }
    navigation.navigate(`list/[city]`, {city : searchCity});
  };

  const handleChange = (text: string) => {
    setSearchCity(text);
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Rechercher une ville..."
        value={searchCity}
        onChangeText={handleChange}  // Met à jour le state avec le texte
      />
      
      <Button 
        title="Rechercher"
        color={style.color} 
        onPress={submitSearch}  // Appelle la fonction lors de l'appui
      />
    </View>
  );
}
