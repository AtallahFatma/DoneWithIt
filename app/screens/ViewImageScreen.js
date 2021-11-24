import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}></Image>
            <View style={styles.closeIcon}>

            </View>
            <View style={styles.openIcon}>

            </View>
        </SafeAreaView>

    );
}
// rnss  to create style const
const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 70,
        left: 30,
        borderRadius: 50
    },
    openIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 70,
        right: 30,
        borderRadius: 50
    }
});

export default ViewImageScreen;