// _layout.tsx
import { Stack } from 'expo-router';

// Le fichier _layout.tsx définit simplement la mise en page pour les écrans de cette partie de l'application
export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A2273C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        {/* Assurez-vous de ne pas inclure de props comme 'component', 'children' ou 'getComponent' ici */}
        <Stack.Screen name="index" options={{
            title: 'Teoractive | Rechercher une  ville'
        }} />
        <Stack.Screen name="about" options={{
            title: 'Teoractive | A propos'
        }} />

        <Stack.Screen 
        name="list/[city]"  // Utilisation de la syntaxe dynamique de `expo-router`
        options={({ route }) => ({
          title: `Météo pour ${route.params?.city || ''}`,
        })} 
        />
    </Stack>
  );
}
