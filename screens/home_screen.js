import React, { useState, useEffect } from 'react';
import { View, StatusBar, FlatList, StyleSheet, Text } from 'react-native';

//constants
import Colors from '../const/colors/colors';
import LoadingView from '../components/loading_view';

//component
import SongRow from '../components/song_row';

//redux related stuff
import { useSelector, useDispatch } from 'react-redux';
import { updateSongList } from '../redux/action/song_action'

const HomeScreen = props => {
    const songs = useSelector(state => state.songReducer.songs);
    const [isRefreshing, setRefreshing] = useState(false);
    const [isToShowIndicator, setShowIndicator] = useState(false);
    const loadingOptions = {
        pullToRefresh: 'PULL_TO_REFRESH',
        loading: 'LOADING',
    }
    const dispatch = useDispatch();

    const showLoadingLayout = (option) => {
        if (option === loadingOptions.pullToRefresh) {
            setRefreshing(true);
        } else {
            setShowIndicator(true);
        }
    }

    const hideLoadingLayout = (option) => {
        if (option === loadingOptions.pullToRefresh) {
            setRefreshing(false);
        } else {
            setShowIndicator(false);
        }
    }

    const fetchDataFromServer = async (option) => {
        showLoadingLayout(option);
        try{
            await dispatch(updateSongList());
        }catch(err){
            console.error(err)
        }
        hideLoadingLayout(option);
    }

    useEffect(() => {
        fetchDataFromServer(loadingOptions.loading);
    }, [])

    const onItemPress = (item) => {
        props.navigation.navigate('DetailScreen',
            { trackId: item.trackId, trackName: item.trackName });
    }

    const renderItem = ({ item }) => (
        <SongRow item={item} onItemPress={onItemPress}></SongRow>
    );

    if (!isToShowIndicator && songs.length === 0)
        return (<View
            style={styles.noDataContainer}>
            <StatusBar
                hidden={false}
                translucent
                backgroundColor={Colors.colorPrimaryDark} />
            <Text>No data available</Text>
        </View>);

    return (<View style={styles.container}>
        <StatusBar hidden={false} translucent backgroundColor={Colors.colorPrimaryDark} />

        {isToShowIndicator ?
            <LoadingView /> :
            <FlatList
                data={songs}
                renderItem={renderItem}
                keyExtractor={item => "" + item.trackId}
                onRefresh={() => fetchDataFromServer(loadingOptions.pullToRefresh)}
                refreshing={isRefreshing}
            />}
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default HomeScreen;