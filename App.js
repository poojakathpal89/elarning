import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './src/pages/splash/SplashScreen';
import RegisterScreen from './src/pages/register/RegisterScreen';
import StudentScreen from './src/pages/student/StudentScreen';
import TeacherScreen from './src/pages/teacher/TeacherScreent';
import WelcomeScreen from './src/pages/welcome/WelcomeScreen';
import LoginScreen from './src/pages/auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './src/pages/usertest/TestScreen';
import NewStudentScreen from './src/pages/newStudent2/NewStudentScreen';
import NewStudentThree from './src/pages/newStudent3/NewStudentThree';
import MeenuScreen from './src/pages/menu/MenuScreen';
import MakeGroups from './src/pages/makegroups/MakeGroups';
import GroupOneScreen from './src/pages/makeGroups1/MakeGroupOneScreen';
import StudentCodeScreen from './src/pages/studentCode/StudentScreenCode';
import MultipleStudentScreen from './src/pages/multipleStudent/MultipleStudentScreen';
import NewGroupOneScreen from './src/pages/group/NewGroupOneScreen';
 import NewGroupTwoScreen from './src/pages/group/NewGroupTwoScreen';
import NewGroupThreeScreen from  './src/pages/group/NewGroupThreeScreen';
import MainDashBoardScreen from './src/pages/dashboard/MainDashBoardScreen';
import ChooseAvatarScreen from './src/pages/chooseAvatar/ChooseAvtarScreen';
import NewStudentNameCodeScreen from './src/pages/newStudentCodeName/NewStudentNameCodeScreen';
import TeacherNameScreen from './src/pages/teacherName/TeacherNameScreen';
import NewStudentName from './src/pages/newStudentName/NewStudentName';
import NewStudentScreenTwo from './src/pages/newStudentName/NewStudentScreenTwo';
import NewTeacherName from './src/pages/newTeacher/NewTeacherName';
import ExerciseOne from './src/pages/exerciseList/ExerciseOne';
import ExerciseTwo from './src/pages/exerciseList/ExerciseTwo';
import ExerciseMultipleOne from './src/pages/exerciseList/ExerciseMultipleOne';
import ExerciseMultipleThree from './src/pages/exerciseList/ExerciseMultipleThree';
import ExerciseMultipleTwo from './src/pages/exerciseList/ExerciseMultipleTwo';
import ExerciseMultipleFour from './src/pages/exerciseList/ExerciseMultipleFour';
import ExerciseMultipleFive from './src/pages/exerciseList/ExerciseMultipleFive';
import ExerciseMultipleSix  from './src/pages/exerciseList/ExerciseMultipleSix';


const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login  Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

const Welcome = () => {
 
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Test = () => {
  return (
    <Stack.Navigator initialRouteName="TestScreen">
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const oneExercise = () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseOne">
      <Stack.Screen
        name="ExerciseOne"
        component={ExerciseOne}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const twoExercise = () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseTwo">
      <Stack.Screen
        name="ExerciseTwo"
        component={ExerciseTwo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const userNewStudent = () => {
  return (
    <Stack.Navigator initialRouteName="NewStudentScreen">
      <Stack.Screen
        name="NewStudentScreen"
        component={NewStudentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const newStudentThree = () => {
  return (
    <Stack.Navigator initialRouteName="NewStudentThree">
      <Stack.Screen
        name="NewStudentThree"
        component={NewStudentThree}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const menu= () => {
  return (
    <Stack.Navigator initialRouteName="MeenuScreen">
      <Stack.Screen
        name="MeenuScreen"
        component={MeenuScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const makegroups= () => {
  return (
    <Stack.Navigator initialRouteName="MakeGroups">
      <Stack.Screen
        name="MakeGroups"
        component={MakeGroups}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const groupOne= () => {
  return (
    <Stack.Navigator initialRouteName="GroupOneScreen">
      <Stack.Screen
        name="GroupOneScreen"
        component={GroupOneScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const studentCode= () => {
  return (
    <Stack.Navigator initialRouteName="StudentCodeScreen">
      <Stack.Screen
        name="StudentCodeScreen"
        component={StudentCodeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const multipleStudent= () => {
  return (
    <Stack.Navigator initialRouteName="MultipleStudentScreen">
      <Stack.Screen
        name="MultipleStudentScreen"
        component={MultipleStudentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const newGroupOne= () => {
  return (
    <Stack.Navigator initialRouteName="NewGroupOneScreen">
      <Stack.Screen
        name="NewGroupOneScreen"
        component={NewGroupOneScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const newGroupTwo= () => {
  return (
    <Stack.Navigator initialRouteName="NewGroupTwoScreen">
      <Stack.Screen
        name="NewGroupTwoScreen"
        component={NewGroupTwoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const newGroupThree= () => {
  return (
    <Stack.Navigator initialRouteName="NewGroupThreeScreen">
      <Stack.Screen
        name="NewGroupThreeScreen"
        component={NewGroupThreeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const dashBoard= () => {
  return (
    <Stack.Navigator initialRouteName="MainDashBoardScreen">
      <Stack.Screen
        name="MainDashBoardScreen"
        component={MainDashBoardScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const chooseAvtar= () => {
  return (
    <Stack.Navigator initialRouteName="ChooseAvatarScreen">
      <Stack.Screen
        name="ChooseAvatarScreen"
        component={ChooseAvatarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const newStudentCodeName= () => {
  return (
    <Stack.Navigator initialRouteName="NewStudentNameCodeScreen">
      <Stack.Screen
        name="NewStudentNameCodeScreen"
        component={NewStudentNameCodeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const newStudentName= () => {
  return (
    <Stack.Navigator initialRouteName="NewStudentName">
      <Stack.Screen
        name="NewStudentName"
        component={NewStudentName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const newStudentTwo= () => {
  return (
    <Stack.Navigator initialRouteName="NewStudentScreenTwo">
      <Stack.Screen
        name="NewStudentScreenTwo"
        component={NewStudentScreenTwo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const teacherName= () => {
  return (
    <Stack.Navigator initialRouteName="TeacherNameScreen">
      <Stack.Screen
        name="TeacherNameScreen"
        component={TeacherNameScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const newTeacherName= () => {
  return (
    <Stack.Navigator initialRouteName="NewTeacherName">
      <Stack.Screen
        name="NewTeacherName"
        component={NewTeacherName}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleOne= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleOne">
      <Stack.Screen
        name="ExerciseMultipleOne"
        component={ExerciseMultipleOne}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleTwo= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleTwo">
      <Stack.Screen
        name="ExerciseMultipleTwo"
        component={ExerciseMultipleTwo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleThree= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleThree">
      <Stack.Screen
        name="ExerciseMultipleThree"
        component={ExerciseMultipleThree}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleFour= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleFour">
      <Stack.Screen
        name="ExerciseMultipleFour"
        component={ExerciseMultipleFour}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleFive= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleFive">
      <Stack.Screen
        name="ExerciseMultipleFive"
        component={ExerciseMultipleFive}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const exerciseMultipleSix= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleSix">
      <Stack.Screen
        name="ExerciseMultipleSix"
        component={ExerciseMultipleSix}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Register = () => {
 
  return (
    <Stack.Navigator initialRouteName="RegisterScreen">
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name="StudentScreen"
        component={StudentScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TeacherScreen"
        component={TeacherScreen}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

export default class AppContainer extends React.Component {

 
  
  render() {
     return(
       <>
      {/* <StatusBar backgroundColor={constantcolor.STATUS_BAR_COLOR} barStyle="light-content" /> */}
      
            <NavigationContainer>
            <Stack.Navigator  initialRouteName="SplashScreen">
            
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}/>

                <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
              />
            
            <Stack.Screen
                name="Test"
                component={Test}
                options={{headerShown: false}}
              />


                <Stack.Screen
                name="userNewStudent"
                component={userNewStudent}
                options={{headerShown: false}}
              />

            <Stack.Screen
                name="newStudentThree"
                component={newStudentThree}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="menu"
                component={menu}
                options={{headerShown: false}}
              />

       
                <Stack.Screen
                name="makegroups"
                component={makegroups}
                options={{headerShown: false}}
              />

                  <Stack.Screen
                name="groupOne"
                component={groupOne}
                options={{headerShown: false}}
              />

             <Stack.Screen
                name="studentCode"
                component={studentCode}
                options={{headerShown: false}}
              />

               <Stack.Screen
                name="multipleStudent"
                component={multipleStudent}
                options={{headerShown: false}}
              />


            <Stack.Screen
                name="newGroupOne"
                component={newGroupOne}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="newGroupTwo"
                component={newGroupTwo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="newGroupThree"
                component={newGroupThree}
                options={{headerShown: false}}
              />

                <Stack.Screen
                name="dashBoard"
                component={dashBoard}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="chooseAvtar"
                component={chooseAvtar}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="newStudentCodeName"
                component={newStudentCodeName}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="teacherName"
                component={teacherName}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="newStudentName"
                component={newStudentName}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="newStudentTwo"
                component={newStudentTwo}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="newTeacherName"
                component={newTeacherName}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="oneExercise"
                component={oneExercise}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="twoExercise"
                component={twoExercise}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="exerciseMultipleOne"
                component={exerciseMultipleOne}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="exerciseMultipleThree"
                component={exerciseMultipleThree}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="exerciseMultipleTwo"
                component={exerciseMultipleTwo}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="exerciseMultipleFour"
                component={exerciseMultipleFour}
                options={{headerShown: false}}
              />
              
              <Stack.Screen
                name="exerciseMultipleFive"
                component={exerciseMultipleFive}
                options={{headerShown: false}}
              />
                 <Stack.Screen
                name="exerciseMultipleSix"
                component={exerciseMultipleSix}
                options={{headerShown: false}}
              />
      
            </Stack.Navigator>
          </NavigationContainer>
         
     
       </>
  
     ) 
     }
  }