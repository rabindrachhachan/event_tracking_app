import { StyleSheet } from 'react-native';

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

});

export default styles;
