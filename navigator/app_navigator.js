//Screens
import HomeScreen from '../screens/home_screen';
import SplashScreen from '../screens/splash_screen';
import DetailScreen from '../screens/detail_screen';

//Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//consts
import Colors from '../const/colors/colors'
import Strings from '../const/strings/strings'

const appNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: Strings.songs
        }
    },
    DetailScreen: {
        screen: DetailScreen
    }
}, {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.colorPrimary
        },
        headerTintColor: Colors.colorWhite
    }
});

export default createAppContainer(appNavigator);