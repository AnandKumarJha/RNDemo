
import React from 'react';
import AppNavigator from './navigator/app_navigator'

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import songReducer from './redux/reducer/song_reducer';
import ReduxThunk from 'redux-thunk';

const mainReducer = combineReducers({
  songReducer: songReducer
});

const store = createStore(mainReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (<Provider store={store}><AppNavigator /></Provider>);
}

export default App;
