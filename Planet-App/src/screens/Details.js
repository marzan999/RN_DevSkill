import React from 'react'
import { View } from 'react-native'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function Details() {
    return (
        <View style={{ backgroundColor: colors.black, flex: 1 }}>
            <Text>Details Screen</Text>
        </View>
    )
}
