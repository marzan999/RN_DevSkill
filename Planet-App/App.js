import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { spacing, typography } from './src/theme/typography';
import Text from './src/components/text/text';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text>hello react native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
