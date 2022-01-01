import React from 'react'
import { Pressable, View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/Planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
            <PlanetHeader />
            <Pressable onPress={() => navigation.navigate("Details")}>
                <Text>GO TO DETAILS</Text>
            </Pressable>
            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
}
