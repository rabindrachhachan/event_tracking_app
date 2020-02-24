import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles';
import backArrow from "../assets/back-arrow.png"

export default class CustomHeader extends Component {
    constructor(props) {
        super(props);
    }


    renderHeaderLeftIcon = () => {
        return (
            <TouchableOpacity
                style={styles.headerLeft}
                onPress={() => this.props.navigation.goBack(null)}
            >
                <Image
                    source={backArrow}
                    style={{width:18, height: 18, tintColor:'rgb(0,151,235)' }}
                />
            </TouchableOpacity>
        );
    };

    renderHeaderCenter = title => {
        return (
            <View
                style={styles.headerCenter}
                
            >
                <Text
                    style={styles.title}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.1}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                >
                    {title}
                </Text>
            </View>
            
        );
    };

    render() {
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.header}>
                    {this.renderHeaderLeftIcon()}
                    {this.renderHeaderCenter(this.props.title)}
                </View>
            </View>
        );
    }
}
