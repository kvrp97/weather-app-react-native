import { View, Text } from 'react-native'
import React from 'react'

const RowText = (props) => {
    const {messageOne,messageTwo,containerStyle,messageOneStyles,messageTwoStyles} = props
    return (
        <View style={containerStyle}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}


export default RowText