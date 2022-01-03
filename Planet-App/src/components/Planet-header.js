import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/color'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ backButton = false }) {

    const navigation = useNavigation();

    return (
        <View style={{ paddingLeft: spacing[6], paddingVertical: spacing[4], borderBottomWidth: 0.5, borderColor: colors.white, flexDirection: 'row', alignItems: 'center' }}>
            {backButton &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="white" style={{ marginRight: spacing[4], top: 2 }} />
                </TouchableOpacity>
            }
            <Text preset='h2'>
                THE PLANETS
            </Text>

        </View>
    )
}
