import React, { Component } from "react";
import {  TouchableOpacity, Image, View, Text } from "react-native";
import GlobalStyle from "../css/style";
import {GlobalService} from "../services/AllServices";

export default class FooterComponentWithTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: "",
            moneymatters: 2,
            offers: "",
            myVouchers:"",
        };
    }

    render() {
        const { active, props } = this.props;
   //// console.log('active-----',GlobalService.Home.RAPP_MONEY_MATTERS);
        return (
            <>
             {active != undefined && (
                <View style={[GlobalStyle.bottomNav]}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("DashboardPageStack", {
                                screen: "DashboardPage",
                            });
                        }} style={GlobalStyle.bottomNavLeftItem}>
                        {/* <Image source={require("../Image/Vector.png")} style={GlobalStyle.bottomNavIcon} /> */}
                            { active == 'home' ?
                               <>
                                <Text style={GlobalStyle.bottomNavTextActive}>subjects</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>subjects</Text>
                            }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("DashboardPageStack", {
                                screen: "DashboardPage",
                            });
                        }} style={GlobalStyle.bottomNavItem}>
                            { active == 'home' ?
                               <>
                                <Text style={GlobalStyle.bottomNavTextActive}>groups</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>groups</Text>
                            }
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("MyVoucherScreenStack", {
                                screen: "MyVoucherScreen",
                            });

                        }} style={GlobalStyle.bottomNavRightItem}>
                            <Image source={require("../Image/pic18.png")} style={{width: 90, height:20, resizeMode: 'contain',borderRadius:5}} />

                        
                        { active == 'myVouchers' ?
                               <>

                                <Text style={GlobalStyle.bottomNavTextActive}>Teacher Name</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>Teacher Name</Text>
                            }
                    </TouchableOpacity>
                </View> 
                )}
            </>
        );
    }
}


