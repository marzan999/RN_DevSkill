import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import { spacing } from './src/theme/spacing';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Web from './src/screens/Web';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  } else {
    return (
      // <View style={styles.container}>
      //   <Text preset="h1" style={{ color: 'yellow' }}>
      //     hello react native
      //   </Text>
      //   <StatusBar style="auto" />
      // </View>  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
          <Stack.Screen name="Web" component={Web} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
