export const UPDATE_SONGS = 'update_songs';

export const updateSongList = () => {
    return async dispatch => {
        try {
            const response = await fetch("https://itunes.apple.com/search?term=jack+johnson", {
                method: 'GET'
            });

            const resData = await response.json()

            dispatch({
                type: UPDATE_SONGS,
                songsToBeUpdated: resData.results
            });
        } catch (err) {
            throw err;
        }
    };
};