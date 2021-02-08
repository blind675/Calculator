/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import AppStyle from './src/AppStyle';
import Button from './src/components/SoftUI_button';
import Label from './src/components/SoftUI_label';

function App() {
    return (
        <View style={AppStyle.instance.style.screenContainer}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{flex: 1}} />
                <View style={AppStyle.instance.style.container}>
                    <Label />
                    <View style={AppStyle.instance.style.row}>
                        <Button title="AC" />
                        <Button title="+/-" />
                        <Button title="%" />
                        <Button title="+" />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button title="7" highlight />
                        <Button title="8" highlight />
                        <Button title="9" highlight />
                        <Button title="*" />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button title="4" highlight />
                        <Button title="5" highlight />
                        <Button title="6" highlight />
                        <Button title="-" />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button title="1" highlight />
                        <Button title="2" highlight />
                        <Button title="3" highlight />
                        <Button title="+" />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button title="0" highlight doubleSize />
                        <Button title="." />
                        <Button title="=" />
                    </View>
                </View>
                <View style={{flex: 1}} />
            </SafeAreaView>
        </View>
    );
}

export default App;
