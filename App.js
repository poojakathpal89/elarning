import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './src/pages/splash/SplashScreen';
 import RegisterScreen from './src/pages/register/RegisterScreen';
import MainScreen from './src/pages/main/MainScreen';

import StudentScreen from './src/pages/student/StudentScreen';
import TeacherScreen from './src/pages/teacher/TeacherScreent';
import WelcomeScreen from './src/pages/welcome/WelcomeScreen';
import LoginScreen from './src/pages/auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './src/pages/usertest/TestScreen';
import NewStudentScreen from './src/pages/newStudent2/NewStudentScreen';

import MeenuScreen from './src/pages/menu/MenuScreen';
//  import MakeGroups from './src/pages/makegroups/MakeGroups';
import GroupOneScreen from './src/pages/makeGroups1/MakeGroupOneScreen';
import StudentCodeScreen from './src/pages/studentCode/StudentScreenCode';
import MultipleStudentScreen from './src/pages/multipleStudent/MultipleStudentScreen';
import NewGroupOneScreen from './src/pages/group/NewGroupOneScreen';
 import NewGroupTwoScreen from './src/pages/group/NewGroupTwoScreen';
import NewGroupThreeScreen from  './src/pages/group/NewGroupThreeScreen';
import MainDashBoardScreen from './src/pages/dashboard/MainDashBoardScreen';
import ChooseAvtar from './src/pages/chooseAvatar/ChooseAvtarScreen';
// import ChooseAvatarTeacherScreen from './src/pages/chooseAvatar/ChooseAvatarTeacherScreen';
import NewTeacherPrintScreen from './src/pages/newTeacher/NewTeacherPrintScreen';
import NewStudentNameCodeScreen from './src/pages/newStudentCodeName/NewStudentNameCodeScreen';
import TeacherNameScreen from './src/pages/teacherName/TeacherNameScreen';
// import NewStudentName from './src/pages/newStudentName/NewStudentName';
import StudentRegisterScreen from './src/pages/register/StudentRegister';
// import NewStudentScreenTwo from './src/pages/newStudentName/NewStudentScreenTwo';
//  import NewTeacherName from './src/pages/newTeacher/NewTeacherName';
import ExerciseOne from './src/pages/exerciseList/ExerciseOne';
import ExerciseTwo from './src/pages/exerciseList/ExerciseTwo';
import ExerciseMultipleOne from './src/pages/exerciseList/ExerciseMultipleOne';
import ExerciseMultipleThree from './src/pages/exerciseList/ExerciseMultipleThree';
import ExerciseMultipleTwo from './src/pages/exerciseList/ExerciseMultipleTwo';
import ExerciseMultipleFour from './src/pages/exerciseList/ExerciseMultipleFour';
import ExerciseMultipleFive from './src/pages/exerciseList/ExerciseMultipleFive';
import ExerciseMultipleSix  from './src/pages/exerciseList/ExerciseMultipleSix';
import ExerciseMultipleSeven from './src/pages/exerciseList/ExerciseMultipleSeven';
import LearnExreciseScreen from './src/pages/learn/LearnExerciseScreen';
import FirstGradeScreen from './src/pages/grades/FirstGradeScreen';
//  import SubjectsScreen from './src/pages/subjects/SubjectScreen';
 import ArabicScreen from './src/pages/subjects/ArabicScreen';
 import ArabicSubjectScreen from './src/pages/subjects/ArabicSubjectScreen';
import AlphaBetCarScreen from './src/pages/subjects/AlphaBetCarScreen';
import SubscriptionScreen from './src/pages/subscribe/SubscribeScreen';
import HomeMenuScreen from './src/pages/home/HomeMenu';
import HomeMenuScreenTwo from './src/pages/home/HomeMenuScreenTwo';
import ProfilePageScreen from './src/pages/profile/ProfilePageScreen';
import DashboardScreenOne from './src/pages/dashboard/DashboardScreenOne';

// import ListofGradeScreen from './src/pages/grades/ListOfGradeScreen';
import GradeList from './src/pages/grades/GradeScreen';
import Subjects from './src/pages/grades/SubjectScreen';
import Lessons from './src/pages/lesson/LessonScreen';
import TeacherRegisterScreen from './src/pages/register/TeacherRegisterScreen';
import CodeScreen from './src/pages/register/CodeScreen';
import CreateGroups from './src/pages/group/CreateGroupsScreen';
import UserEdit from './src/pages/profile/UserEditScreen';


// import DrawerNavigationRoutes from './src/route/DrawerNavigationRoutes';




const Stack = createStackNavigator();


  const Main = () => {
 
    return (
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
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
          {/* <Stack.Screen
          name="listOfGrade"
          component={listOfGrade}
          options={{headerShown: false}}
        /> */}
        
        <Stack.Screen
          name="UserEdit"
          component={UserEdit}
          options={{headerShown: false}}
        /> 
  
      </Stack.Navigator>
    );
  };
  
  
  const RegisterStudent = () => {
 
    return (
      <Stack.Navigator initialRouteName="StudentRegisterScreen">
        <Stack.Screen
          name="StudentRegisterScreen"
          component={StudentRegisterScreen}
          options={{headerShown: false}}
        />
  
      <Stack.Screen
          name="ChooseAvtar"
          component={ChooseAvtar}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="GradeList"
          component={GradeList}
          options={{headerShown: false}}
        /> 

          <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{headerShown: false}}
        />


      
        <Stack.Screen
          name="Subjects"
          component={Subjects}
          options={{headerShown: false}}
        /> 
    <Stack.Screen
          name="Lessons"
          component={Lessons}
          options={{headerShown: false}}
        /> 

<Stack.Screen
          name="UserEdit"
          component={UserEdit}
          options={{headerShown: false}}
        /> 
  
      </Stack.Navigator>
    );
  };
  
  const RegisterTeacher = () => {
 
    return (
      <Stack.Navigator initialRouteName="TeacherRegisterScreen">
        <Stack.Screen
          name="TeacherRegisterScreen"
          component={TeacherRegisterScreen}
          options={{headerShown: false}}
        />
  
      <Stack.Screen
         name="ChooseAvtar"
         component={ChooseAvtar}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateGroups"
          component={CreateGroups}
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
                name="Main"
                component={Main}
                options={{headerShown: false}}/>

              <Stack.Screen
                name="RegisterStudent"
                component={RegisterStudent}
                options={{headerShown: false}}/>

              <Stack.Screen
                name="RegisterTeacher"
                component={RegisterTeacher}
                options={{headerShown: false}}/> 
                
              


            {/* <Stack.Screen
                name="DrawerNavigationRoutes"
                component={DrawerNavigationRoutes}
                options={{headerShown: false}}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
         
     
       </>
  
     ) 
     }
    }