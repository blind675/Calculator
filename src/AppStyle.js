export default class AppStyle {
    static instance = AppStyle.instance || new AppStyle();

    helloWorld() {
        console.log(`Hello World... \(^_^)/ !!`);
    }
}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1, 
      backgroundColor: "#DEE9FD",
      alignItems: 'center'
    },
    container: {
      marginTop: 32,
      marginHorizontal: 32,
    },
    inner: {
      backgroundColor:"#DEE9F7",
      borderColor: "#E2ECFD",
      borderWidth: 10,
      alignContent: 'center',
      justifyContent: 'center',
    },
    topShadow: {
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#FBFFFF",
    },
    bottomShadow:{
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#B7C4DD",
    }
  
  });