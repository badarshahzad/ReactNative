import { createStackNavigator} from 'react-navigation';

const AppNav  = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen}
});


export default AppNav;