import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { GlobalService } from "../services/AllServices";
export default class ProfilePageHeaderCompnoent extends Component {
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
                                {/* <Image source={require("../Image/return-icon.png")} style={{width:25,height:25}}  /> */}
                                <Text style={{marginBottom:20,marginStart:30}}>X</Text>
                             
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text >Close</Text>
                    <View style={{width:'60%',justifyContent:'center'}}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.topHeading}>
                                Setting
                                {/* { title != "" && title  != undefined ? title : ""} */}
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
        backgroundColor:'#E7E2E2'
     
    },
    returnIcon: {
      width: 50,
      height: 40,        
      backgroundColor:'#E7E2E2',
      alignItems:'center',
      marginStart:20,
      fontSize:30,
      justifyContent:'center',
     
    
     
  },userImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,

},
    headingContainer:{textAlign: "center",width:'100%'},
    topHeading:{color:'#0C222C',fontSize:16,fontWeight:'700',textAlign:'center',fontFamily:'CircularStd-Book'},
    offerText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#0C222C",
        justifyContent:'center'
      
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