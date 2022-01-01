import React from 'react'
import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/Planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
            <PlanetHeader />
        </SafeAreaView>
    )
}
