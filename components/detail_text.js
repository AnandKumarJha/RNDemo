import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailText = props => {
    return (<View style={styles.container}>
        <Text style={styles.title}>{props.title} : </Text>
        <Text style={styles.description}>{props.description}</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 13,
        color:'blue'
    },
    description: {
        fontSize: 13,
        fontWeight: 'bold',
    }
});

export default DetailText;