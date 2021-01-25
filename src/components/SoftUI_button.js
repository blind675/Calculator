import React from 'react';
import {View, Text} from 'react-native';
import {Dimensions} from 'react-native';
import AppStyle from '../AppStyle';

function Button(props) {
    const getButtonStyle = () => {
        const windowWidth = Dimensions.get('window').width;

        const buttonWidth =
            (windowWidth -
                AppStyle.instance.size.margin.normal * 2 -
                AppStyle.instance.size.margin.small * 8) /
            4;

        return {
            width: props.doubleSize
                ? buttonWidth * 2 + AppStyle.instance.size.margin.small * 2
                : buttonWidth,
            height: buttonWidth,
            borderRadius: buttonWidth / 2,
        };
    };

    const getButtonText = () => {
        return [
            AppStyle.instance.style.buttonText,
            {
                color: props.highlight
                    ? AppStyle.instance.color.buttonText_LightBlue
                    : AppStyle.instance.color.buttonText_Gray,
            },
        ];
    };

    return (
        <View style={AppStyle.instance.style.buttonContainer}>
            <View style={AppStyle.instance.style.buttonTopShadow}>
                <View style={AppStyle.instance.style.buttonBottomShadow}>
                    <View
                        style={[
                            AppStyle.instance.style.buttonInner,
                            getButtonStyle(),
                        ]}>
                        <Text style={getButtonText()}> {props.title} </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Button;
