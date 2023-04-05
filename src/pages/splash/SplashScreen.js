
import React, { useState, useEffect } from "react";
import { ActivityIndicator,Text, View, Image, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as constantcolor from "../../css/constantcolor";
import splashStyle from "./SplashStyle";

   const SplashScreen = ({ navigation }) => {
        const [animating, setAnimating] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setAnimating(false);
                AsyncStorage.getItem("token").then((value) => {
                    if (value != null) {
                      //  navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes");
                    //  navigation.replace("exerciseLearn");
                    //   navigation.replace("newGroupThree");
                       navigation.replace("Register");
                       
                       
                    } else {
                        navigation.replace("Register");
                        
                        
                    }
                });
            }, 1000);
        }, []);
    
    return (
        <View style={splashStyle.container}>
        <View style={splashStyle.mainContainer}>
              <View style={splashStyle.innerContainer}>
                  <Image source={require("../../Image/logo-icon.png")} style={splashStyle.salashImage} />
              </View>
          </View>
      </View>
    );
};

export default SplashScreen;
