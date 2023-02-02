import React, { Component } from "react";
import {  TouchableOpacity, Image, View, Text } from "react-native";
import GlobalStyle from "../css/style";
import {GlobalService} from "../services/AllServices";

export default class FooterComponent extends Component {
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
                        }} style={GlobalStyle.bottomNavItem}>
                        {/* <Image source={require("../Image/Vector.png")} style={GlobalStyle.bottomNavIcon} /> */}
                            { active == 'home' ?
                               <>
                                <Text style={GlobalStyle.bottomNavTextActive}>{GlobalService.Home ? GlobalService.Home.RAPP_HOME : 'Home'}</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>{GlobalService.Home ? GlobalService.Home.RAPP_HOME : 'Home'}</Text>
                            }
                    </TouchableOpacity>
                


                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("MyVoucherScreenStack", {
                                screen: "MyVoucherScreen",
                            });
                        }} style={GlobalStyle.bottomNavItem}>
                        {/* <Image source={require("../Image/tickets.png")} style={GlobalStyle.bottomNavIcon} /> */}
                        
                        { active == 'myVouchers' ?
                               <>
                                <Text style={GlobalStyle.bottomNavTextActive}>{GlobalService.Home ? GlobalService.Home.RAPP_MY_VOUCHER : 'My Vouchers'}</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>{GlobalService.Home ? GlobalService.Home.RAPP_MY_VOUCHER : 'My Vouchers'}</Text>
                            }
                    </TouchableOpacity>
                </View> 
                )}
            </>
        );
    }
}


