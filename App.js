import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import GetLocation from 'react-native-get-location'
import { WEATHER_API_KEY } from '@env'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setError('Could not fetch weather data : ', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          setLat(location.latitude)
          setLon(location.longitude)
          fetchWeatherData()
        })
        .catch(error => {
          setError('Permission to access location was denied.', error)
        })
    })()
  }, [lat, lon])

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