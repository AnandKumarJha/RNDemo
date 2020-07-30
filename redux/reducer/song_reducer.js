import { UPDATE_SONGS } from '../action/song_action'

const initialState = {
    songs: [],
}

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SONGS:
            return { ...state, songs: action.songsToBeUpdated }

        default:
            return state;
    }
}

export default songReducer;