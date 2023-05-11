import { Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2022-08-30 12:00:00",
        main: {
            temp_max: 298.24,
            temp_min: 296.34,
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_max: 298.24,
            temp_min: 296.34,
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_max: 298.24,
            temp_min: 296.34,
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]


const UpcomingWeather = () => {

    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    const { container, image } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground style={image} source={require('../../assets/upcoming-background.jpg')}>
                <Text>UpcomingWeather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather