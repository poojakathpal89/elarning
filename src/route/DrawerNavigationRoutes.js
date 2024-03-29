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
import Subjects from "../pages/grades/SubjectScreen";
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
import SubjectScreen from "../pages/grades/SubjectScreen";
import ProfilePageScreen from "../pages/profile/ProfilePageScreen";
import CodePrepareScreen from "../pages/group/CodePrepareScreen";
import MultipleStudentScreen from "../pages/multipleStudent/MultipleStudentScreen";





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

const SubjectScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SubjectScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Subjects" component={SubjectScreen} options={{ title: "Subject Screen " }} />
            {/* <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ title: "Lesson Screen" }} /> */}
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

const CodePrepareScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="CodePrepareScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CodePrepareScreen" component={CodePrepareScreen} options={{ title: "Code Prepare Screen" }} />
        </Stack.Navigator>
    );
};

const MultipleStudentScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="MultipleStudentScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MultipleStudentScreen" component={MultipleStudentScreen} options={{ title: "Code Prepare Screen" }} />
        </Stack.Navigator>
    );
};


const LearnExerciseScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="LearnExreciseScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
             <Stack.Screen name="LearnExreciseScreen" component={LearnExreciseScreen} options={{ title: "Learn Exercise Screen" }} />
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


const ListEcerciseScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="ListExcerciseScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListExcerciseScreen" component={ListExcerciseScreen} options={{ title: "Offer detail" }} />
            <Stack.Screen name="ExcerciseOneScreen" component={ExerciseOne} options={{ title: "Exercise One" }} />
            <Stack.Screen name="ExcerciseTwoScreen" component={ExerciseTwo} options={{ title: "Exercise Two" }} />
            <Stack.Screen name="ExerciseMultipleOne" component={ExerciseMultipleOne} options={{ title: "Exercise Multiple One" }} />
            <Stack.Screen name="ExerciseMultipleTwo" component={ExerciseMultipleTwo} options={{ title: "Exercise Multiple Two" }} />
            <Stack.Screen name="ExerciseMultipleThree" component={ExerciseMultipleThree} options={{ title: "Exercise Multiple Three" }} />
            <Stack.Screen name="ExerciseMultipleFour" component={ExerciseMultipleFour} options={{ title: "Exercise Multiple Four" }} />
            <Stack.Screen name="ExerciseMultipleFive" component={ExerciseMultipleFive} options={{ title: "Exercise Multiple Five" }} />
            <Stack.Screen name="ExerciseMultipleSix" component={ExerciseMultipleSix} options={{ title: "Exercise Multiple Six" }} />
            <Stack.Screen name="ExerciseMultipleSeven" component={ExerciseMultipleSeven} options={{ title: "Exercise Multiple Seven" }} />
            <Stack.Screen name="ProfilePageScreen" component={ProfilePageScreen} options={{ title: "Profile Page Screen" }} />



        </Stack.Navigator>
    );
};


const DrawerNavigatorRoutes = (props) => {
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
       

            <Drawer.Screen name="SubjectScreenStack" options={{ drawerLabel: "Learn Exercise" }} component={SubjectScreenStack} />
            <Drawer.Screen name="LearnExerciseScreenStack" options={{ drawerLabel: "Learn Exercise Screen" }} component={LearnExerciseScreenStack} />
            <Drawer.Screen name="ListEcerciseScreenStack" options={{ drawerLabel: "Offer detail" }} component={ListEcerciseScreenStack} />
            {/* <Drawer.Screen name="ExerciseOneScreenStack" options={{ drawerLabel: "Exercise One" }} component={ExerciseOneScreenStack} /> */}
            <Drawer.Screen name="LessonScreenStack" options={{ drawerLabel: "Lesson Screen" }} component={LessonScreenStack} />
            <Drawer.Screen name="ProfileScreenStack" options={{ drawerLabel: "Profile Page" }} component={ProfileScreenStack} />
            <Drawer.Screen name="CodePrepareScreenStack" options={{ drawerLabel: "Code Prepare " }} component={CodePrepareScreenStack} />
            <Drawer.Screen name="MultipleStudentScreenStack" options={{ drawerLabel: "Multiple Screen " }} component={MultipleStudentScreenStack} />

            
            
           </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;
