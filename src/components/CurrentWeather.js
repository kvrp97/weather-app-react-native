import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CurrentWeather() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Icon name="white-balance-sunny" size={100} color="black" />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Fells like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8 </Text>
                    <Text style={styles.highLow}>Low: 6</Text>

                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.message}>Its perfect t-shirt weather</Text>
            </View>
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