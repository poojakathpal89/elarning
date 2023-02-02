import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity,Platform } from "react-native";
import * as constantcolor from "../css/constantcolor";
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
export default class StatusBarComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       
    }
    render() {
       
        return (
            <>

            {  Platform.OS === 'ios' ?
                <View style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: constantcolor.STATUS_BAR_COLOR
                }}>
                    <StatusBar
                    backgroundColor={constantcolor.STATUS_BAR_COLOR}
                        barStyle="light-content"
                    />
                </View>
                :
                <StatusBar backgroundColor={constantcolor.STATUS_BAR_COLOR} barStyle="light-content" />
            }
            </>
        );
    }
}

