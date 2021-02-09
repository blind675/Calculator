/**
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import AppStyle from './src/AppStyle';
import Button from './src/components/SoftUI_button';
import Label from './src/components/SoftUI_label';

function App() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [lastCalculation, setLastCalculation] = useState('.');
    const shouldClearDisplay = useRef(false);

    const operationEnum = {};
    operationEnum['-'] = (firstTerm, secondTerm) => firstTerm - secondTerm;
    operationEnum['+'] = (firstTerm, secondTerm) => firstTerm + secondTerm;
    operationEnum['/'] = (firstTerm, secondTerm) => firstTerm / secondTerm;
    operationEnum['*'] = (firstTerm, secondTerm) => firstTerm * secondTerm;

    const clearAll = () => {
        setCurrentNumber('0');
        setLastCalculation('.');
    };

    const removeDigit = () => {
        if (shouldClearDisplay.current) {
            return;
        }

        if (currentNumber.length === 1 && currentNumber !== '0') {
            setCurrentNumber('0');
        } else if (
            currentNumber.length === 2 &&
            currentNumber[0] === '-' &&
            currentNumber !== '-0'
        ) {
            setCurrentNumber('-0');
        } else {
            setCurrentNumber(currentNumber.slice(0, -1));
        }
    };

    const switchSign = () => {
        if (currentNumber[0] === '-') {
            setCurrentNumber(currentNumber.substring(1));
        } else {
            setCurrentNumber('-' + currentNumber);
        }
    };

    const appendDigitAndSymbol = (digitOrSymbol) => {
        if (shouldClearDisplay.current) {
            setLastCalculation(lastCalculation + ' ' + currentNumber);
            if (digitOrSymbol === '.') {
                setCurrentNumber('0.');
            } else {
                setCurrentNumber(digitOrSymbol);
            }
        } else if (currentNumber === '0' || currentNumber === '-0') {
            if (digitOrSymbol === '0') {
                // 0 and 0 pressed , do nothing
                return;
            }
            if (digitOrSymbol === '.') {
                setCurrentNumber(currentNumber + digitOrSymbol);
                return;
            }
            if (currentNumber === '0') {
                setCurrentNumber(digitOrSymbol);
            } else {
                setCurrentNumber('-' + digitOrSymbol);
            }
        } else if (currentNumber.indexOf('.') !== -1 && digitOrSymbol === '.') {
            // dot already in number , do nothing
            return;
        } else if (currentNumber.length < 10) {
            // just append a digit
            setCurrentNumber(currentNumber + digitOrSymbol);
        }
        shouldClearDisplay.current = false;
    };

    const addOperation = (operation) => {
        shouldClearDisplay.current = false;
        const lastOperation = lastCalculation[lastCalculation.length - 1];

        if (lastOperation in operationEnum) {
            const result = runCalculation();
            setLastCalculation('' + result + ' ' + operation);
        } else {
            setLastCalculation(currentNumber + ' ' + operation);
        }

        setCurrentNumber('0');
    };

    const equalPressed = () => {
        if (lastCalculation.indexOf('=') === -1) {
            const result = runCalculation();
            setLastCalculation(lastCalculation + ' ' + currentNumber + ' =');
            setCurrentNumber('' + result);

            shouldClearDisplay.current = true;
        }
    };

    const runCalculation = () => {
        if (lastCalculation !== '.') {
            const operation = lastCalculation[lastCalculation.length - 1];

            const firstTerm = extractNumberFromString(lastCalculation);
            const secondTerm = extractNumberFromString(currentNumber);

            // test / by 0 - not ot get infinity
            if (operation === '/' && secondTerm === 0) {
                return firstTerm;
            }

            let result = operationEnum[operation](firstTerm, secondTerm);

            if (result > 999999999) {
                return result.toExponential(9);
            }

            const numberString = '' + result;
            if (numberString.indexOf('.') !== -1 && numberString.length > 10) {
                return parseFloat(numberString.substring(0, 10));
            }

            return result;
        }
    };

    // UTILITIES Methods
    //TODO: Extract in utils.
    const extractNumberFromString = (numberString) => {
        if (numberString.indexOf('.') !== -1) {
            return parseFloat(numberString);
        } else {
            return parseInt(numberString, 10);
        }
    };

    return (
        <View style={AppStyle.instance.style.screenContainer}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={AppStyle.instance.style.fullContainer} />
                <View style={AppStyle.instance.style.container}>
                    <Label
                        lastCalculation={lastCalculation}
                        currentNumber={currentNumber}
                    />
                    <View style={AppStyle.instance.style.row}>
                        <Button title="AC" onClick={clearAll} />
                        <Button title="<" onClick={removeDigit} />
                        <Button title="+/-" onClick={switchSign} />
                        <Button title="/" onClick={addOperation} />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button
                            title="7"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="8"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="9"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button title="*" onClick={addOperation} />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button
                            title="4"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="5"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="6"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button title="-" onClick={addOperation} />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button
                            title="1"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="2"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button
                            title="3"
                            highlight
                            onClick={appendDigitAndSymbol}
                        />
                        <Button title="+" onClick={addOperation} />
                    </View>
                    <View style={AppStyle.instance.style.row}>
                        <Button
                            title="0"
                            highlight
                            doubleSize
                            onClick={appendDigitAndSymbol}
                        />
                        <Button title="." onClick={appendDigitAndSymbol} />
                        <Button title="=" onClick={equalPressed} />
                    </View>
                </View>
                <View style={AppStyle.instance.style.fullContainer} />
            </SafeAreaView>
        </View>
    );
}

export default App;
