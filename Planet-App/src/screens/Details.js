import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/Planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'

export default function Details({ route }) {

    const { planet } = route.params;
    const { surfaceImage } = planet

    return (
        <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
            <PlanetHeader backButton={true} />
            <ScrollView>
                <View style={{ paddingVertical: spacing[5] }}>
                    <Image source={surfaceImage} style={{ alignSelf: 'center' }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
