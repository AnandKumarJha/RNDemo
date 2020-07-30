import React from 'react';
import {View, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../const/colors/colors';

const LoadingView = () => {
    return (<View style={styles.container}>
        <ActivityIndicator color={Colors.colorPrimary}
            size='large' />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom : 20
    }
});

export default LoadingView;