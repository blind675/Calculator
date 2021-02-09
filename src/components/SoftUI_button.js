import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppStyle from '../AppStyle';

function Button(props) {
    const getButtonStyle = () => {
        return {
            width: props.doubleSize
                ? AppStyle.instance.size.button.doubleWidth
                : AppStyle.instance.size.button.width,
            height: AppStyle.instance.size.button.height,
            borderRadius: AppStyle.instance.size.button.borderRadius,
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
        <TouchableOpacity
            style={AppStyle.instance.style.buttonContainer}
            onPress={() => {
                props.onClick && props.onClick(props.title);
            }}>
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
        </TouchableOpacity>
    );
}

export default Button;
