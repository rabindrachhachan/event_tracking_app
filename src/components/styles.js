import { StyleSheet , Dimensions} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerWrapper: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        elevation: 5,
        height: 60,
    },

    header: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 5,
        height: 59,
    },
    
    title: {
        color: 'rgb(0,151,235)',
        fontSize: 18,
        alignSelf: 'stretch',
        fontFamily: 'roboto',
        lineHeight: 24,
        height: 24,
        width: '100%',
    },

    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenter: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    listItemCard:{ 
        height:80,
        width: DEVICE_WIDTH * 0.95,
        margin:5,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(169,171,173)',
        backgroundColor:'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    listItemImageContainer:{
        height:70,
        width:70,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    },
    listItemImage: {
        height:70,
        width:70,
        borderRadius:35,
    },


    listItemTextContainer:{
        width: DEVICE_WIDTH * 0.70,
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
    },

    eventItem: {
        marginTop: 2,
        width: DEVICE_WIDTH * 0.48,
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

});

export default styles;
