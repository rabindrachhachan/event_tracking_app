import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles';

const ListItem = React.memo((props)=>{
    const {thumbNail, desc, tracking ,onItemPressed,item} = props
    return(
        <TouchableOpacity
            onPress={() => onItemPressed(item,tracking)} 
            key={desc}
            style={[styles.listItemCard,{ borderColor : tracking? '#2AC940': 'rgb(169,171,173)'}]}>
            <View style={styles.listItemImageContainer}>
                <Image
                    style={styles.listItemImage}
                    source={{uri: thumbNail}}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.listItemTextContainer}>
                <Text 
                    style={styles.text1} 
                    numberOfLines={3}
                >
                    {desc}
                </Text>
            </View>
        </TouchableOpacity>
    )
})

export default ListItem;