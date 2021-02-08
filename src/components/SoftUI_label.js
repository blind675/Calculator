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
                            123456789 +
                        </Text>
                        <Text style={AppStyle.instance.style.labelMainText}>
                            -1234567890
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Label;
