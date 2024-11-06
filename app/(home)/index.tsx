// index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Search from '@/components/Search';
import style from '@/style';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Search/>
      <Link href="/about">
        <Text>Aller à propos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
