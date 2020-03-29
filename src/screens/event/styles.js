import {
    StyleSheet,
    Dimensions
} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    catalogWrapper: {
        margin: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 80,
        backgroundColor: 'transparent',
    },
    header: {
        width: DEVICE_WIDTH,
        height: 50,
        backgroundColor: '#E1FBFF',
        borderBottomWidth: 1,
        borderColor: 'rgb(169,171,173)',
        paddingLeft: 10,
        marginTop:50,
        alignItems:'center',
        flexDirection:'row',
    },
    
    text1: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '400',
        alignSelf: 'flex-start',
        paddingStart: 10,
    },

    toggleWrapper: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 50,
        flexDirection: 'row',
        width: DEVICE_WIDTH * 0.48,

    },
    toggleTextWrapper: {
        paddingVertical: 10,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    focusText: {
        fontSize: 14,
        textAlign: 'left',
        color: '#686868',
        width: '100%',
        paddingLeft: 10,
    },
    toggleIconWrapper: {
        paddingVertical: 10,
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

});

export default styles;
