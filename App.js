import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import GetLocation from 'react-native-get-location'
import { TEST_KEY } from '@env' 

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  console.log(TEST_KEY);

  useEffect(() => {
    (async () => {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          setLocation(location)
        })
        .catch(error => {
          setError('Permission to access location was denied.', error)
        })
    })
  },[])  

  if (loading) {
    return (
      <View style={styles.container}>        
        <ActivityIndicator size={'large'} color={'lightblue'} />
      </View>
    )
  } 

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App