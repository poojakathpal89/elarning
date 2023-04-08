import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
const registerStyle = StyleSheet.create({
   

    chooseAvatarBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    chooseAvatarImage: {
        width: 70,
        height: 70,
        // resizeMode: 'contain',
        marginBottom: 5,
        /// backgroundColor:'red'
    },
   
});

export default registerStyle;
