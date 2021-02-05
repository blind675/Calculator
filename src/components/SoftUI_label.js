import React from 'react';
import {View, Text} from 'react-native';

function Label(props) {
    return (
        <View style={{height: 100}}>
        <View style={{flex: 1}}>
            <View style={{
                margin: 10,
                flex: 1,
                backgroundColor: 'transparent',
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 20,
                overflow: 'hidden',
                shadowColor: 'black',
                shadowRadius: 10,
                shadowOpacity: 1,
            }}>
            </View>
        </View>
        </View>
    );
}

export default Label;
