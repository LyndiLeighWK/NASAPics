import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F8F8F8'
    },
    headerStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle: {
        fontSize: 20
    },
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    },
    imageStyle: {
        flex: 1,
        margin: 5,
        height: 300,
        width: null,
        padding: 10
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
    },
    dateStyle: {
        alignSelf: 'center',
        fontSize: 16,
    },
    titleStyle: {
        fontSize: 20,
    },
    textStyle: {
        fontSize: 16,
    }
});
