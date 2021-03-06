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
        width:DEVICE_WIDTH,
        height:80,
        borderRadius:2,
        borderWidth: 1,
        borderColor: 'rgb(169,171,173)',
        backgroundColor:'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginHorizontal:10,
    },
    eventTitleContainer: {
        height: '80%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: 'white',
    },
    removeContainer :{
        height: '20%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '400',
        alignSelf: 'center',
    },

    catalogWrapper: {
        margin: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 50,
        backgroundColor: 'transparent',
        flex:1
    },

    header: {
        height:50,
        backgroundColor: '#E1FBFF',
        borderBottomWidth: 1,
        borderColor: 'rgb(169,171,173)',
        paddingLeft: 10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },

});

export default styles;
