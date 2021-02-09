import React from 'react';
import {View, Text} from 'react-native';
import AppStyle from '../AppStyle';

function Label(props) {
    return (
        <View style={AppStyle.instance.style.labelContainer}>
            <View style={AppStyle.instance.style.labelTopShadow}>
                <View style={AppStyle.instance.style.labelBottomShadow}>
                    <View style={AppStyle.instance.style.labelInner}>
                        <Text style={AppStyle.instance.style.labelSmallText}>
                            {props.lastCalculation}
                        </Text>
                        <Text style={AppStyle.instance.style.labelMainText}>
                            {props.currentNumber}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Label;
