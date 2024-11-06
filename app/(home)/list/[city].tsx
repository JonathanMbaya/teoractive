import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

export default function List() {
  const { city } = useLocalSearchParams();
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=94c6cf0868fa5cb930a5e2d71baf0dbf`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError('Impossible de récupérer les données météo.');
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    } else {
      setError('Aucune ville spécifiée');
      setLoading(false);
    }
  }, [city]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return null;
  }

  const { main, wind, clouds, weather, visibility } = weatherData;
  const [weatherDetails] = weather;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Météo pour {city}</Text>
      <Text style={styles.info}>Température : {main.temp}°C</Text>
      <Text style={styles.info}>Température min : {main.temp_min}°C</Text>
      <Text style={styles.info}>Température max : {main.temp_max}°C</Text>
      <Text style={styles.info}>Ressenti : {main.feels_like}°C</Text>
      <Text style={styles.info}>Humidité : {main.humidity}%</Text>
      <Text style={styles.info}>Point de rosée : {main.dew_point}°C</Text>
      <Text style={styles.info}>Pression : {main.pressure} hPa</Text>
      <Text style={styles.info}>Vent : {wind.speed} m/s, direction {wind.deg}°</Text>
      <Text style={styles.info}>Nuages : {clouds.all}%</Text>
      <Text style={styles.info}>Visibilité : {visibility} m</Text>
      <Text style={styles.info}>Conditions : {weatherDetails.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});
