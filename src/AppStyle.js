import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default class AppStyle {
    static instance = AppStyle.instance || new AppStyle();

    static _windowWidth = Dimensions.get('window').width;
    static _buttonWidth = (AppStyle._windowWidth - 16 * 2 - 12 * 8) / 4;

    get color() {
        return {
            appBackground_LightGray: '#DEE9FD',
            buttonInner_LightGray: '#DEE9F7',
            buttonBorder_LightGray: '#E2ECFD',
            buttonShadowTop_White: '#FBFFFF',
            buttonShadowBottom_DarkGray: '#B7C4DD',
            buttonText_Gray: '#515E75',
            buttonText_LightBlue: '#0098EB',
        };
    }

    get size() {
        return {
            margin: {
                small: 12,
                normal: 16,
            },
            padding: {
                small: 12,
            },
            shadow: {
                size: 6,
                radius: 6,
            },
            border: {
                width: 1,
            },
            shadowBorder: {
                width: 6,
            },
            button: {
                height: AppStyle._buttonWidth,
                width: AppStyle._buttonWidth,
                doubleWidth: AppStyle._buttonWidth * 2 + 12 * 2,
                borderRadius: AppStyle._buttonWidth / 2,
            },
        };
    }

    get style() {
        return StyleSheet.create({
            screenContainer: {
                flex: 1,
                backgroundColor: this.color.appBackground_LightGray,
                alignItems: 'center',
            },
            container: {
                margin: this.size.margin.normal,
            },
            row: {
                flexDirection: 'row',
            },
            labelContainer: {
                marginVertical: this.size.margin.normal,
                height: this.size.button.doubleWidth,
                backgroundColor: this.color.buttonInner_LightGray,
                borderRadius: this.size.button.borderRadius + 1,
            },
            labelInner: {
                flex: 1,
                alignItems: 'stretch',
                padding: this.size.margin.normal,
            },
            labelSmallText: {
                marginVertical: this.size.margin.small,
                textAlign: 'right',
                fontSize: 20, // TODO: create text size prop
                fontWeight: 'bold',
                color: this.color.buttonText_Gray,
            },
            labelMainText: {
                marginVertical: this.size.margin.small,
                textAlign: 'right',
                fontSize: 30, // TODO: create text size prop
                fontWeight: 'bold',
                color: this.color.buttonText_LightBlue,
            },
            labelTopShadow: {
                flex: 1,
                backgroundColor: 'transparent',
                borderColor: this.color.appBackground_LightGray,
                borderWidth: this.size.shadowBorder.width,
                borderRadius: this.size.button.borderRadius,
                overflow: 'hidden',
                shadowOffset: {
                    width: this.size.shadow.size,
                    height: this.size.shadow.size,
                },
                shadowOpacity: 1,
                shadowRadius: this.size.shadow.radius,
                shadowColor: this.color.buttonShadowBottom_DarkGray,
            },
            labelBottomShadow: {
                flex: 1,
                overflow: 'hidden',
                borderColor: this.color.appBackground_LightGray,
                borderWidth: this.size.shadowBorder.width,
                borderRadius: this.size.button.borderRadius - 10,
                shadowOffset: {
                    width: -this.size.shadow.size,
                    height: -this.size.shadow.size,
                },
                shadowOpacity: 1,
                shadowRadius: this.size.shadow.radius,
                shadowColor: this.color.buttonShadowTop_White,
            },
            buttonContainer: {
                margin: this.size.margin.small,
            },
            buttonInner: {
                backgroundColor: this.color.buttonInner_LightGray,
                borderColor: this.color.buttonBorder_LightGray,
                borderWidth: this.size.border.width,
                alignContent: 'center',
                justifyContent: 'center',
            },
            buttonTopShadow: {
                shadowOffset: {
                    width: -this.size.shadow.size,
                    height: -this.size.shadow.size,
                },
                shadowOpacity: 1,
                shadowRadius: this.size.shadow.radius,
                shadowColor: this.color.buttonShadowTop_White,
            },
            buttonBottomShadow: {
                shadowOffset: {
                    width: this.size.shadow.size,
                    height: this.size.shadow.size,
                },
                shadowOpacity: 1,
                shadowRadius: this.size.shadow.radius,
                shadowColor: this.color.buttonShadowBottom_DarkGray,
            },
            buttonText: {
                alignContent: 'center',
                textAlign: 'center',
                fontSize: 26, // TODO: create text size prop
                fontWeight: 'bold',
            },
        });
    }
}
