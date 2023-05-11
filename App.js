import { View, StyleSheet } from 'react-native'
import React from 'react'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
