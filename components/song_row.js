import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

const SongRow = props => {
    const item = props.item;
    return (
        <TouchableOpacity onPress={() => { props.onItemPress(item) }}>
            <View>
                <View style={styles.container_row}>
                    <Image style={styles.thumbnail} source={{ uri: item.artworkUrl60 }} />
                    <View style={styles.container_column}>
                        <Text
                            style={styles.title_style}
                            numberOfLines={1}>
                            {item.trackName}
                        </Text>

                        <Text
                            style={styles.collection_style}
                            numberOfLines={2}>
                            {item.collectionName}
                        </Text>

                        <View style={styles.text_container}>
                            <Text style={styles.track_style}>
                                {item.artistName}
                            </Text>
                            <Text style={{ ...styles.track_style, marginLeft: 20 }}>
                                Price : {item.trackPrice}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divider} />
            </View>
        </TouchableOpacity>);
}

const styles = StyleSheet.create({
    container_row: {
        flexDirection: 'row',
        padding: 10,
        width: '100%'
    },
    container_column: {
        width: 0,
        flexGrow: 1,
        flex: 1,
        justifyContent : 'space-between',
        paddingTop : 1,
        paddingBottom:5
    },
    thumbnail: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray'
    },
    title_style: {
        fontSize: 14,
        fontWeight:'bold'
    },
    collection_style: {
        fontSize: 12,
    },
    track_style: {
        fontSize: 11,
    },
    text_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
});

export default SongRow;