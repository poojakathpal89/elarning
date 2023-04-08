// Import React
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
 import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
///import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/stack";
import * as constantcolor from "../css/constantcolor";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
// Import Screens
// import CustomSidebarMenu from "./CustomSidebarMenu";
// import NavigationDrawerHeader from "./NavigationDrawerHeader";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
///const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

    switch (routeName) {
        // case "DashboardPage":
        //     return "Home";
        // case "MoneyOutScreen":
        //     return "Money Matters!";
        // case "OfferScreen":
        //     return "Offers";
        case "BottomTabStack":
            return "Home";
    }
};

const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: "#cee1f2",
                color: "#cee1f2",
                itemStyle: { marginVertical: 5, color: "white" },
                labelStyle: {
                    color: "#d8d8d8",
                },
            }}
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            // drawerContent={CustomSidebarMenu}
        >
            <Drawer.Screen
                name="DashboardPageStack"
                options={{
                    drawerLabel: "Dashboard",
                }}
                component={DashboardPageStack}
            />

            <Drawer.Screen name="ChangePasswordScreenStack" options={{ drawerLabel: "Change password" }} component={ChangePasswordScreenStack} />
           </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;
