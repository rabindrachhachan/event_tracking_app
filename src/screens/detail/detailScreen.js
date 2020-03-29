import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import styles from "./styles";
import _ from 'lodash';
import {
    addToTrackList,
    reset
} from "../../actions/event"

class EventDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            added: false
        }
    }

    componentDidMount(){
        this.props.reset();
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.added !== prevState.added && this.state.added){
            this.renderSnackbar('Added successfully')
        }
    }

    renderSnackbar = message => {
        Snackbar.show({
            title: message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#FA9917',
            color: 'white',
        });
    };

    renderEventItem = (item, index=1) => {
        const desc = `${item['name']} in ${item['venue']} (${item['type']})`
        let tracking = false;
        const { data } = this.props;

        if(data && data.length){
            const index = _.findIndex(data,{id: item['id']})
            if(index !== -1){
                tracking = true;
            }
        }
        return (
            <View>
                <View key={index.toString()} style={styles.eventItem}>
                    <View style={styles.eventImageContainer}>
                        <Image
                            style={styles.eventImage}
                            source={{uri: item['thumbNail']}}
                            resizeMode='stretch'
                        />
                    </View>
                    <View style={[styles.eventTitleContainer,
                        { borderBottomColor : tracking? '#2AC940': 'white'}]}>
                        <Text style={styles.text1} numberOfLines={4}>
                            {desc}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    onAddPressed = item => {
        this.setState({
            added: true
        },()=>{
            this.props.addToTrackList(item)
        })
        
    };

    renderAddButton = (item ,tracking) => {
        const selected = this.state.added || tracking;
        return (
            <View style={[styles.toggleWrapper,{backgroundColor: selected ? '#7D98B3': '#48BBEC'}]}>
                <TouchableOpacity
                    disabled ={selected}
                    onPress ={()=> this.onAddPressed(item)} 
                    style={styles.toggleTextWrapper}>
                    <Text style={[styles.focusText,{color:'white'}]}>
                        {'Add to Tracklist'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };


    render() {
        const {item,tracking } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                {this.renderEventItem(item)}
                <View style={styles.addButton}>
                    {this.renderAddButton(item,tracking)}
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.EventReducer.data,
    };
};

const mapDispatchToProps ={
    addToTrackList,
    reset
}



export default connect(mapStateToProps,mapDispatchToProps)(EventDetailScreen);