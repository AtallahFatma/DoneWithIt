import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}></Image>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.regiterButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
    },
    regiterButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
    },
    logo: {
        height: 100,
        width: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
});

export default WelcomeScreen;