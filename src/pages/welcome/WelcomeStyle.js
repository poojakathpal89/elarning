import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeArea: {
        height: "100%",
        position: "relative",
    },
    welcomeContentBox: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    welcomeImage: {
        width: "95%",
        height: 317,
        resizeMode: "contain",
        marginTop: 30,
    },
    welcomeTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    welcomeHeading: {
        color: "#fff",
        fontSize: 30,
        marginTop: 40,
        fontWeight: "bold",
        //fontFamily: "Inter",
    },
    bottomBtnBox: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        width: "100%",
    },
    sliderBarBox: {
        position: "absolute",
        left: -8,
        flexDirection: "row",
        width: "108%",
        top: 21,
     
    },
    sliderBar: {
        width: "24%",
        marginRight: 4,
        justifyContent: "center",
        alignContent: "center",
    },
});

export default welcomeStyle;
