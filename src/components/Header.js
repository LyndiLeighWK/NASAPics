//Import libraries
import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'

// Make a component
const Header = (props) => {
    const { headerTextStyle, headerStyle } = Styles;
    return (
        <View style={headerStyle}>
            <Text style={headerTextStyle}>
                {props.text}
            </Text>
        </View>
    );
};

export default Header;
