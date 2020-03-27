import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import styles from "./styles"
import {
    setUserName
} from "../../actions/login"

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'launch',
        header: null,
    };

    constructor(props){
        super(props);
        this.state ={
            userName: '',
            visible: true
        }
    }

    handleOnChange = (text)=>{
        this.setState({
            userName: text,
            errorMsg: false
        })
    }

    hidePopup =()=>{
        this.setState({
            visible: false
        })
    }

    handleOkPress =()=>{
        if(this.state.userName){
            this.props.setUserName(this.state.userName);
            this.props.navigation.navigate('app');
            this.hidePopup()
        }else{
            this.setState({
                errorMsg: true
            })
        }
    }



    renderModalContent =()=>{
        return(
            <View style ={styles.modalContainer}>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputWrapperBorder}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={'Enter your name'}
                            value={this.state.userName}
                            onChangeText={text =>
                                this.handleOnChange(text)
                            }
                        />
                    </View>
                    <View style={styles.inputErrorWrapper}>
                        {this.state.errorMsg && 
                            <Text style={styles.errorText}>{'User name is required'} </Text>
                        }
                    </View> 
                
                </View>
                <View style={styles.dialogFooter}>
                <TouchableOpacity
                    style={styles.footerItemOk}
                    onPress={() => this.handleOkPress()}
                >
                    <Text style={styles.footerItemText}>{`Done`}</Text>
                </TouchableOpacity>
                </View>
            </View>
            
        )

    }

    render() {
        return (
            <View style={styles.container}>
                { this.state.visible && <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose={() => this.hidePopup()}>
                    <TouchableOpacity
                        style={styles.modalContainerBackground}
                        activeOpacity={1}
                    >
                    {this.renderModalContent()}
                    </TouchableOpacity>
                </Modal>
                }
                
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.LoginReducer.userName,
    };
};

const mapDispatchToProps ={
    setUserName
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);