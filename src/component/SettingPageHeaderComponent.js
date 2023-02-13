import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { GlobalService } from "../services/AllServices";
export default class SettingPageHeaderComponent extends Component {
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
                            style={{width:10,color:'#fff',justifyContent: "flex-start" }}
                                activeOpacity={0.5}
                                onPress={() => {

                                    props.navigation.goBack(null);
                                }}
                            >
                            <View style={[styles.returnIcon,{}]}>
                                 <Image source={require("../Image/less-than.png")} style={{width:20,height:20,marginEnd:30}}  />
                                 </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={{marginTop:10,fontSize:14,}} >Setting</Text>
                  </View>
                    <View style={{width:'50%',justifyContent:'center'}}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.topHeading}>
                                Nickname
                            </Text>
                        </View>
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
        justifyContent:'center',
      
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