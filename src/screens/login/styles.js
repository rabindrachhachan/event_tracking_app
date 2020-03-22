import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputWrapper: {
        height:70,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'column',
    },

    inputWrapperBorder:{
        width: '100%',
        borderBottomColor:'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputErrorWrapper:{
        width: '100%',
        height:30,
        flexDirection: 'row',
        marginBottom:10
    },
    inputText: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: '#989898',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
    },

    errorText: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
    },

    dialogFooter: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right:0,
        position:'absolute',
        backgroundColor: '#48BBEC',
        
    },
    footerItemOk: {
        width: '45%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right:0,
        bottom: 0,
        position:'absolute',
    },
    footerItemText: {
        height: 30,
        lineHeight: 16,
        color: 'white',
        fontFamily: 'roboto',
        width: '100%',
        fontSize: 16,
        paddingVertical: 7,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
    modalContainerBackground: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        elevation:4,
        borderColor: '#bbb',
        borderWidth: StyleSheet.hairlineWidth,
        width: '100%',
        height:150,
        backgroundColor: 'white',
        position:'absolute',
        top:0,
        left:0,
        right:0
    },
});

export default styles;
