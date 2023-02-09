import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { GlobalService } from "../services/AllServices";
export default class HeaderWithTextComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {}

    render() {
        const { title,props } = this.props;
        return (
            <View style={styles.logoBox}>
                <View style={{flex:1,flexDirection: "row",paddingVertical:24 }}>
                    <View style={{width:'20%',justifyContent:'flex-start'}}>
                        <TouchableOpacity
                            style={{width:40,color:'#fff',justifyContent: "flex-start" }}
                                activeOpacity={0.5}
                                onPress={() => {

                                    props.navigation.goBack(null);
                                }}
                            >
                            <View style={[styles.returnIcon,{}]}>
                                <Image source={require("../Image/return-icon.png")} style={{width:25,height:25}}  />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'60%',justifyContent:'center'}}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.topHeading}>
                                {/* { title != "" && title  != undefined ? title : ""} */}
                                الحروف الابجدية
                            </Text>
                        </View>
                        
                    </View>
                    

                    <View style={{width:'20%',justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{width:40,color:'#fff',height:40}}
                            onPress={() => {
                                props.navigation.navigate("ProfilePageStack", {
                                    // screen: "ProfilePage",
                                    params: {},
                                });
                            }}>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>);
    }
}

const styles = StyleSheet.create({ 
    logoBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"#FBFEFD",
    },
    returnIcon: {
      width: 40,
      height: 40,        
      backgroundColor:'#FBFEFD',
      alignItems:'center',
      marginStart:20,
      justifyContent:'center',
      borderRadius:20,
     
  },userImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,

},
    headingContainer:{textAlign: "center",width:'100%'},
    topHeading:{color:'#0C222C',fontSize:16,fontWeight:'700',textAlign:'center',fontFamily:'CircularStd-Book'},
    offerText: {
        fontSize: 30,
        fontWeight: "400",
        color: "#0C222C",
    },
    explorerText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#0C222C",
        fontFamily:'CircularStd-Book',
        width:270,
        textAlign:'center',
        
        marginTop:4
    },
});