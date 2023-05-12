import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/WeatherType'

export default function CurrentWeather() {
    const {
        wrapper,
        container,
        temp,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>                
                <Feather
                    name={'sun'}
                    size={100}
                    color={'black'}
                />
                <Text style={temp}>6</Text>
                <Text style={feels}>Fells like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyle={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={'Its sunny'}
                messageTwo={weatherType['Thunderstorm'].message}
                containerStyle={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
        color: 'black',
    },
    message: {
        fontSize: 30,
        color: 'black',
    }
})