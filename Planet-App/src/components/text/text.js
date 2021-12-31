import React from 'react'
import { View, Text as RNText } from 'react-native'
import { mergeAll, flatten } from 'ramda'
import { presets } from './text.preset'

export default function Text({ children, preset = 'default', style }) {
    const styles = mergeAll(
        flatten([presets[preset] || presets.default, CustonStyle])
    )
    return (
        <View>
            <RNText style={styles}>
                {children}
            </RNText>
        </View>
    )
}
