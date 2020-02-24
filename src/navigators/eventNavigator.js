import React from 'react';
import {
    createStackNavigator
} from 'react-navigation';

import EventListScreen from '../screens/event/eventList';
import DetailScreen from "../screens/detail/detailScreen";
import Header from "../components/header";

const EventStack = createStackNavigator({
    event: { 
        screen: EventListScreen ,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    title={`Events`}
                    navigation={navigation}
                />
            )
        }),
    },
    detail: { screen: DetailScreen,
        navigationOptions: ({ navigation }) => ({
            header: (
                <Header
                    title={`Details`}
                    navigation={navigation}
                />
            )
        }),
        
    }
},{
    initialRouteName: 'event',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
    })
});

export default EventStack;
