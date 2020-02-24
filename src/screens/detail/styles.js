import {
    StyleSheet,
    Dimensions
} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    eventItem: {
        marginTop: 2,
        width: DEVICE_WIDTH * 0.99,
        height:200,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(169,171,173)',
        backgroundColor:'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginEnd: 2,
    },

    eventImageContainer: {
        height: '60%',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    eventImage: {
        height: 120,
        width: undefined,
    },
    eventTitleContainer: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        paddingTop:10
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
        elevation: 5,
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
        textAlign: 'center',
        color: 'rgb(0,151,235)',
        width: '100%',
    },
    toggleIconWrapper: {
        paddingVertical: 10,
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    addButton :{ bottom:0,left:0,right:0,position:'absolute'}
});

export default styles;
