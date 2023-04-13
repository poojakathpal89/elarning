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
//import LearnExcercise from "../pages/grades/SubjectScreen";
import LessonScreens from "../pages/lesson/LessonScreen";
//import LearnExreciseScreen from "../pages/learn/LearnExerciseScreen";

// import OfferDetailScreen from "../pages/offerdetail/OfferDetailScreen";
import ListExcerciseScreen from "../pages/listExercise/ListExerciseScreen";
import CreateGroupsScreen from "../pages/group/CreateGroupsScreen";
import LearnExreciseScreen from "../pages/learn/LearnExerciseScreen";
import ExerciseOne from "../pages/exerciseList/ExerciseOne";
import ExerciseTwo from "../pages/exerciseList/ExerciseTwo";
import ExerciseMultipleOne from "../pages/exerciseList/ExerciseMultipleOne";
import ExerciseMultipleTwo from "../pages/exerciseList/ExerciseMultipleTwo";
import ExerciseMultipleThree from "../pages/exerciseList/ExerciseMultipleThree";
import ExerciseMultipleFour from "../pages/exerciseList/ExerciseMultipleFour";
import ExerciseMultipleFive from "../pages/exerciseList/ExerciseMultipleFive";
import ExerciseMultipleSix from "../pages/exerciseList/ExerciseMultipleSix";
import ExerciseMultipleSeven from "../pages/exerciseList/ExerciseMultipleSeven";
import MultipleGroupsScreen from "../pages/group/MultipleGroupsScreen";
import GroupStudentScreen from "../pages/group/GroupStudentScreen";
import StudentDetailScreen from "../pages/group/StudentDetailScreen";
import StudentProgressScreen from "../pages/group/StudentProgressScreen";
import SubjectScreen from "../pages/grades/SubjectScreen";
// import UserEdit from './src/pages/profile/UserEditScreen';
import UserEdit from '../pages/profile/UserEditScreen';
import CodePrepareScreen from "../pages/group/CodePrepareScreen";
import ProfilePageScreen from "../pages/profile/ProfilePageScreen";






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

const MultipleGroupsScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="MultipleGroupsScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MultipleGroupsScreen" component={MultipleGroupsScreen} options={{ title: "Multiple Groups " }} />
            <Stack.Screen name="GroupStudentScreen" component={GroupStudentScreen} options={{ title: "Groups Student " }} />
            <Stack.Screen name="StudentDetailScreen" component={StudentDetailScreen} options={{ title: "Student Detail " }} />
            <Stack.Screen name="StudentProgressScreen" component={StudentProgressScreen} options={{ title: "Student Progress " }} />
            <Stack.Screen name="CreateGroupsScreen" component={CreateGroupsScreen} options={{ title: "Create Group Screen" }} />
            <Stack.Screen name="CodePrepareScreen" component={CodePrepareScreen} options={{ title: "User Edit Screen" }} />

            
        </Stack.Navigator>
    );
};


const LessonScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="LessonScreens"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="LessonScreens" component={LessonScreens} options={{ title: "Lesson Screen" }} />
        </Stack.Navigator>
    );
};

const ProfileScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="ProfilePageScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ProfilePageScreen" component={ProfilePageScreen} options={{ title: "Profile Screen" }} />
        </Stack.Navigator>
    );
};


const CreateGroupScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="CreateGroupsScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
        </Stack.Navigator>
    );
};



const SubjectScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SubjectScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SubjectScreen" component={SubjectScreen} options={{ title: "Subjects" }} />
          
        </Stack.Navigator>
    );
};


const DrawerNavigatorRoutesTeacher = (props) => {
    return (
        <Drawer.Navigator
           
            screenOptions={{ headerShown: false, gestureEnabled: false,  activeTintColor: "#cee1f2",
            color: "#cee1f2",
            itemStyle: { marginVertical: 5, color: "white" },
            labelStyle: {
                color: "#d8d8d8",
            },}}
            // drawerContent={CustomSidebarMenu}
        >
        <Drawer.Screen name="MultipleGroupsScreen" options={{ drawerLabel: "Learn Exercise" }} component={MultipleGroupsScreenStack} />
        <Drawer.Screen name="SubjectScreenStack" options={{ drawerLabel: "Learn Exercise" }} component={SubjectScreenStack} />
        <Drawer.Screen name="LessonScreenStack" options={{ drawerLabel: "Lesson Screen" }} component={LessonScreenStack} />
        
        <Drawer.Screen name="CreateGroupScreenStack" options={{ drawerLabel: "Create Group Screen" }} component={CreateGroupScreenStack} />
        <Drawer.Screen name="ProfileScreenStack" options={{ drawerLabel: "Profile Page" }} component={ProfileScreenStack} />

     {/* <Drawer.Screen name="ExerciseOneScreenStack" options={{ drawerLabel: "Exercise One" }} component={ExerciseOneScreenStack} /> */}

           </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutesTeacher;
