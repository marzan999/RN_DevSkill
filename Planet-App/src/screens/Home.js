import React from 'react'
import { Pressable, View } from 'react-native'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function Home({ navigation }) {
    return (
        <View style={{ backgroundColor: colors.black, flex: 1 }}>
            <Pressable onPress={() => navigation.navigate("Details")}>
                <Text>Go to Details Screen</Text>
            </Pressable>
        </View>
    )
}
