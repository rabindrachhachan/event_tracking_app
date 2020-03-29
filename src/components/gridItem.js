import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles';

const GridItem = React.memo((props)=>{
    const {thumbNail, desc, tracking ,onItemPressed,item} = props
    return (
        <TouchableOpacity
            onPress={() => onItemPressed(item,tracking)}
        >
            <View key={desc} style={[styles.eventItem]}>
                <View style={styles.eventImageContainer}>
                    <Image
                        style={styles.eventImage}
                        source={{uri: thumbNail}}
                        resizeMode='cover'
                    />
                </View>
                <View style={[styles.eventTitleContainer,
                    { borderBottomColor : tracking? '#2AC940': 'white'}]}>
                    <Text style={styles.text1} numberOfLines={4}>
                        {desc}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
})

export default GridItem;