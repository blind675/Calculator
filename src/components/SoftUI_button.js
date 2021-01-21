import React from 'react';
import {View, Text} from 'react-native';

function Button() {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
              <View style={[styles.inner , {width: 60, height: 60, borderRadius: 30}]}>
                <Text>1</Text>
              </View>
            </View>
        </View>
    )
}

export default Button;
