import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//components
import DetailText from '../components/detail_text';
import ColumnDivider from '../components/column_divider';

//constants
import Strings from '../const/strings/strings';

//redux related stuff
import { useSelector } from 'react-redux';

const DetailScreen = props => {
    const trackId = props.navigation.state.params.trackId;
    const songs = useSelector(state => state.songReducer.songs);
    const item = songs.filter(item => item.trackId == trackId)[0];

    return (<View>
        <Image
            style={styles.thumbnail}
            source={{ uri: item.artworkUrl100 }}
            resizeMode='stretch' />
        <View style={styles.container}>
            <Text style={styles.title_style}>
                {item.trackName}
            </Text>

            <Text style={styles.track}>
                {Strings.collectionName} : {item.collectionName}
            </Text>

            <View style={styles.text_container}>
                <ColumnDivider>
                    <DetailText title={Strings.artist} description={item.artistName} />
                    <DetailText title={Strings.price} description={item.trackPrice} />
                </ColumnDivider>
            </View>

            <View style={styles.text_container}>
                <ColumnDivider>
                    <DetailText title={Strings.discCount} description={item.discCount} />
                    <DetailText title={Strings.discNumber} description={item.discNumber} />
                </ColumnDivider>
            </View>

            <View style={styles.text_container}>
                <ColumnDivider>
                    <DetailText title={Strings.trackCount} description={item.trackCount} />
                    <DetailText title={Strings.trackNumber} description={item.trackNumber} />
                </ColumnDivider>
            </View>

            <View style={styles.text_container}>
                <ColumnDivider>
                    <DetailText title={Strings.country} description={item.country} />
                    <DetailText title={Strings.currency} description={item.currency} />
                </ColumnDivider>
            </View>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        height: 180,
    },
    container: {
        padding: 10
    },
    title_style: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },
    track: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 10,
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

DetailScreen.navigationOptions = (screenProps) => ({
    title: screenProps.navigation.state.params.trackName
})

export default DetailScreen;