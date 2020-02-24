import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation';

import LaunchScreen from '../screens/launch/launchScreen';
import LoginScreen from '../screens/login/loginScreen';
import DrawerScreen from '../screens/drawer/drawerScreen';
import EventStack from "./eventNavigator"

const AuthNavigation = createStackNavigator({
    login: { 
        screen: LoginScreen
},
},{
    initialRouteName: 'login',
});

const AppNavigation = createDrawerNavigator(
    {
        event: { screen: EventStack},
    },
    {
        contentComponent: ({ navigation }) => {
            return <DrawerScreen navigation={navigation} />;
        },
    }
);

const RootNavigator = createSwitchNavigator(
    {
        launch: LaunchScreen,
        auth: AuthNavigation,
        app: AppNavigation,
    },
    {
        initialRouteName: 'launch',
    }
);

export default RootNavigator;
