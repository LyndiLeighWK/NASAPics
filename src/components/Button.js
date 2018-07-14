import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './Styles'

const Button = ({ onPress, children }) => {
    const { buttonTextStyle, buttonStyle } = Styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
