import { View, StyleSheet } from 'react-native'
import React from 'react'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
