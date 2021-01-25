/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import AppStyle from './src/AppStyle';
import Button from './src/components/SoftUI_button';

function App() {
    return (
        <View style={AppStyle.instance.style.screenContainer}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={AppStyle.instance.style.safeAreaContainer}>
                <View style={AppStyle.instance.style.container}>
                    <View
                        style={{
                            backgroundColor: 'red',
                            height: 100
                        }}
                    />
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
            </SafeAreaView>
        </View>
    );
}

export default App;
