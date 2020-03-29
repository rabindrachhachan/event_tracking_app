import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Picker,
    Switch,
    Dimensions
} from "react-native";
import { connect } from 'react-redux';
import styles from "./styles";
import rowData  from '../../data';
const DEVICE_WIDTH = Dimensions.get('window').width;
import _ from 'lodash';

import {
    setListOrder
} from "../../actions/event"

import ListItem from "../../components/listItem";
import GridItem from "../../components/gridItem";


class EventListScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            data : [],
            mode: 'listview',
            toggle: false,
            options: ['name','type','venue'],
            order: 'name'
        }
    }

    componentDidMount(){
        const { order,data } = this.props;
        let updateList = _.uniqBy([...data,...rowData],'id');
        let options  = this.state.options;
        if(order && order !== null){
            updateList =  _.sortBy(updateList,[order]);
            options.unshift(order);
            options = _.uniq(options)

        }
        this.setState({
            data : updateList,
            options:options,
            order:order && order !== null? order : this.state.order
        })
        
    }

    componentDidUpdate(prevProps){
        if(prevProps.added !== this.props.added && this.props.added){
            this.updateList()
        }
        if(prevProps.removed !== this.props.removed && this.props.removed ){
            this.updateList()
        }
    }

    updateList =()=>{
        const { order,data } = this.props;
        let updateList = _.uniqBy([...data, ...this.state.data,],'id')
        if(order && order !== null){
            updateList = _.sortBy(updateList,[order]);
        }
        this.setState({
            data : updateList
        })
    }


    updateOrder = (order)=>{
        const { data } = this.state;
        this.setState({
            data :_.sortBy(data,[order]),
            order: order
        },()=>{
            this.props.setListOrder(order)
        })
    }

    renderFilterToggle = () => {
        const { options , order } = this.state;
        return (
            <View style={{width:'50%'}}>
                <Picker
                    style={styles.focusText}
                    selectedValue={order}
                    onValueChange={this.updateOrder}
                >
                    {options.map((value, index) => (
                        <Picker.Item
                            key={index}
                            value={value}
                            label={value}
                        />
                    ))}
                </Picker>
            </View>
        );
    };

    onSwitchView =(value)=>{
        this.setState({
            mode: value ? 'gridview': 'listview',
            toggle: value
        })

    }

    renderToggleMode = () => {
        const { toggle } = this.state;
        return (
            <View style={styles.toggleWrapper}>
                <View style={styles.toggleTextWrapper}>
                    <Text style={styles.focusText}>
                        {'Switch view'}
                    </Text>
                </View>
                <View style={styles.toggleIconWrapper}>
                    <Switch
                        onValueChange={value => this.onSwitchView(value)}
                        value={toggle}
                    />
                </View>
            </View>
        );
    };


    onItemPressed =(item,tracking)=>{
        this.props.navigation.navigate('detail',{item:item, tracking:tracking});
    }

    renderEventItem = ({ item, index }) => {
        const desc = `${item['name']} in ${item['venue']} (${item['type']})`
        const { mode } = this.state
        let tracking = false;
        const { data } = this.props;

        if(data && data.length){
            const index = _.findIndex(data,{id: item['id']})
            if(index !== -1){
                tracking = true;
            }
        }

        if(mode ==='listview'){
            return (
                <ListItem 
                    desc={desc} 
                    tracking={tracking} 
                    thumbNail={item['thumbNail']} 
                    onItemPressed={this.onItemPressed}
                    item={item} 
                />
            );
        }else{
            return (
                <GridItem
                    desc={desc} 
                    tracking={tracking} 
                    thumbNail={item['thumbNail']} 
                    onItemPressed={this.onItemPressed} 
                    item={item} 
                />
            );
        }
        
    };

    renderEventList = () => {
        const { data, mode } = this.state;
        if (data && data.length) {
            if(mode ==='listview'){
                return (
                    <FlatList
                        data={data}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderEventItem}
                    />
                );
            }else{
                return (
                    <View>
                        <FlatList
                            data={data}
                            numColumns={2}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderEventItem}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        />
                    </View>
                    
                );
            }
        }
        return null;
    };

    renderHeader = () => (
        <View style={styles.header}>
            {this.renderFilterToggle()}
            {this.renderToggleMode()}
        </View>
    );
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
        added:state.EventReducer.added,
        removed:state.EventReducer.removed,
    };
};

const mapDispatchToProps ={
    setListOrder
}

export default connect(mapStateToProps,mapDispatchToProps)(EventListScreen);