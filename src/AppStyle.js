import {StyleSheet} from 'react-native';

export default class AppStyle {
    static instance = AppStyle.instance || new AppStyle();

    get color() {
        return {
            appBackground_LightGray: '#DEE9FD',
            buttonInner_LightGray: '#DEE9F7',
            buttonBorder_LightGray: '#E2ECFD',
            buttonShadowTop_White: '#FBFFFF',
            buttonShadowBottom_DarkGray: '#B7C4DD',
            buttonText_Gray: '#91A1BD',
            buttonText_LightBlue: '#10A5F5',
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
        };
    }

    get style() {
        return StyleSheet.create({
            screenContainer: {
                flex: 1,
                backgroundColor: this.color.appBackground_LightGray,
                alignItems: 'center',
            },
            safeAreaContainer: {
                flex: 1,
                alignSelf: 'stretch',
            },
            container: {
                margin: this.size.margin.normal,
            },
            row: {
                flexDirection: 'row',
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
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 26,
                fontWeight: 'bold',
            },
        });
    }
}
