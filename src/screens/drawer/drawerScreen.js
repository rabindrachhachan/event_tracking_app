import React, { Component } from 'react';
import { View, TouchableOpacity,Text,FlatList} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import _ from 'lodash'
import {
    removeFromTrackList,
    setTrackList
} from "../../actions/event"


export class DrawerScreen extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        if(this.props.stringifyData && Array.isArray(JSON.parse(this.props.stringifyData))){
            this.props.setTrackList(JSON.parse(this.props.stringifyData))
        }
        this.setData()
    }

    componentDidUpdate(prevProps){
        if(prevProps.added !== this.props.added && this.props.added ){
            this.setData()
        }
        if(prevProps.removed !== this.props.removed && this.props.removed ){
            this.setData()
        }
    }

    setData =()=>{
        const { order,data } = this.props;
        let updateList =  data;
        if(order && order !== null){
            updateList = _.sortBy(updateList,[order]);
        }
        this.setState({
            data : updateList,
        })
    }

    onItemPressed =(item)=>{
        this.props.navigation.navigate('detail',{item:item});
        this.props.navigation.closeDrawer()
    }

    removeItem =(item)=>{
        this.props.removeFromTrackList(item)
    }



    renderEventItem = ({ item, index }) => {
        const desc = `${item['name']} in ${item['venue']} (${item['type']})`
        return (
            <TouchableOpacity
                onPress={() => this.onItemPressed(item)}
            >
                <View key={index.toString()} style={[styles.eventItem,{width: '90%'}]}>
                    <View style={styles.eventTitleContainer}>
                        <Text style={styles.text1} numberOfLines={4}>
                            {desc}
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.removeContainer}
                        onPress={() => this.removeItem(item)}>
                        <Text style={[styles.text1,{color: 'rgb(0,151,235)', alignSelf:'center'}]} numberOfLines={1}>
                            {'Remove'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    renderEventList =()=>{
        const { data} = this.state;
        if (data && data.length) {
            return (
                <FlatList
                    data={data}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderEventItem}
                    extraData={this.props}
                />
            );
        }
        return null;
    }

    renderHeader =()=>{
        <View style={styles.header}>
            <Text style={styles.text1}>{'Track List'} </Text>
        </View>
    }

    render() { 
        return (
            <View style={styles.container}>
               {this.renderHeader()}
            <View style={styles.catalogWrapper}>
                {this.renderEventList()}
            </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.EventReducer.data,
        order: state.EventReducer.order,
        added: state.EventReducer.added,
        removed:state.EventReducer.removed,
        stringifyData: state.EventReducer.stringifyData
    }

};

const mapDispatchToProps = {
    removeFromTrackList,
    setTrackList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerScreen);
