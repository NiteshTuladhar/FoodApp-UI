import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppLoader = () => {
    return (
        <View style={styles.circularLoading}>
            <Text>sdf</Text>
        </View>
    )
}

export default AppLoader

const styles = StyleSheet.create({
    circularLoading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
