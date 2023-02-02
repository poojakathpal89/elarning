import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import * as constantcolor from "../../css/constantcolor";
const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: constantcolor.APP_COLOR,
    },
    mainContainer: {
        width: "100%",
    },
    innerContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    salashImage: {
        width: "75%",
        height: 180,
        resizeMode: "contain",
    },
    welcomeText: {
        color: "#FF9A32",
        justifyContent: "center",
        fontSize: 25,
    },
    healthText: {
        color: "#fff",
        justifyContent: "center",
        fontSize: 27,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    activityIndicator: {
        alignItems: "center",
        height: 80,
    },
});

export default SplashStyle;
