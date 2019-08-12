import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../components/Home';
import Second from '../components/Second';

const homeRoute = createDrawerNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },

    Second: {
        screen: Second,
        navigationOptions: {
            title: 'Second'
        }
    }
    
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(homeRoute);