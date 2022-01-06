import React from 'react'
import { View, Pressable, } from 'react-native'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'
import Text from './text/text'

export default function Button({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                flex: 1,
                backgroundColor: "white",
                marginRight: spacing[2],
                borderRadius: spacing[4],
                paddingVertical: spacing[3],
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{ color: colors.black }}>{title}</Text>
        </Pressable>
    )
}
