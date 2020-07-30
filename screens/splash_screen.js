import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';

//constants
import Colors from '../const/colors/colors'
import Strings from '../const/strings/strings'

const SplashScreen = props => {

    useEffect(() => {
        setTimeout(
            () => {
                props.navigation.replace('HomeScreen');
            }, 3000
        );
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={Colors.colorPrimaryDark} hidden />
            <Image
                source={require('../assets/images/splash_logo.png')}
                style={styles.splash_logo} />
            <Text style={styles.splash_text}>{Strings.splashScreen}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splash_logo: {
        width: 100,
        height: 100,
    },
    splash_text: {
        color: Colors.colorBlack,
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    }
});

export default SplashScreen;