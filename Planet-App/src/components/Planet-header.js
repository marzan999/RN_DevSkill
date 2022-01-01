import React from 'react'
import { View } from 'react-native'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/color'

export default function PlanetHeader() {
    return (
        <View style={{ paddingLeft: spacing[6], paddingVertical: spacing[4], borderBottomWidth: 0.5, borderColor: colors.white }}>
            <Text preset='h2'>
                THE PLANETS
            </Text>
        </View>
    )
}
