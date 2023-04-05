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
import GradeScreen from './src/pages/grades/GradeScreen';
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
import ChooseAvatarTeacherScreen from './src/pages/chooseAvatar/ChooseAvatarTeacherScreen';
import NewTeacherPrintScreen from './src/pages/newTeacher/NewTeacherPrintScreen';
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
import ExerciseMultipleSeven from './src/pages/exerciseList/ExerciseMultipleSeven';
import LearnExreciseScreen from './src/pages/learn/LearnExerciseScreen';
import FirstGradeScreen from './src/pages/grades/FirstGradeScreen';
 import SubjectsScreen from './src/pages/subjects/SubjectScreen';
 import ArabicScreen from './src/pages/subjects/ArabicScreen';
 import ArabicSubjectScreen from './src/pages/subjects/ArabicSubjectScreen';
import AlphaBetCarScreen from './src/pages/subjects/AlphaBetCarScreen';
import SubscriptionScreen from './src/pages/subscribe/SubscribeScreen';
import HomeMenuScreen from './src/pages/home/HomeMenu';
import HomeMenuScreenTwo from './src/pages/home/HomeMenuScreenTwo';
import ProfilePageScreen from './src/pages/profile/ProfilePageScreen';
import UserEditScreen from './src/pages/profile/UserEditScreen';
import DashboardScreenOne from './src/pages/dashboard/DashboardScreenOne';

// import ListofGradeScreen from './src/pages/grades/ListOfGradeScreen';
import SubjectScreen from './src/pages/grades/SubjectScreen';
import LessonScreen from './src/pages/lesson/LessonScreen';



const Stack = createStackNavigator();

const Auth = () => {
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
// const dashboardScreenOne = () => {
 
//   return (
//     <Stack.Navigator initialRouteName="DashboardScreenOne">
//       <Stack.Screen
//         name="DashboardScreenOne"
//         component={DashboardScreenOne}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };

const Subjects = () => {
 return (
    <Stack.Navigator initialRouteName="SubjectScreen">
      <Stack.Screen
        name="SubjectScreen"
        component={SubjectScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const NewTeacherPrint = () => {
  return (
     <Stack.Navigator initialRouteName="NewTeacherPrintScreen">
       <Stack.Screen
         name="NewTeacherPrintScreen"
         component={NewTeacherPrintScreen}
         options={{headerShown: false}}
       />
     </Stack.Navigator>
   );
 };

const NewAvatarTeacher = () => {
  return (
     <Stack.Navigator initialRouteName="ChooseAvatarTeacherScreen">
       <Stack.Screen
         name="ChooseAvatarTeacherScreen"
         component={ChooseAvatarTeacherScreen}
         options={{headerShown: false}}
       />
     </Stack.Navigator>
   );
 };

const UserEdit = () => {
 
  return (
    <Stack.Navigator initialRouteName="UserEditScreen">
      <Stack.Screen
        name="UserEditScreen"
        component={UserEditScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HomeMenu = () => {
 
  return (
    <Stack.Navigator initialRouteName="HomeMenuScreen">
      <Stack.Screen
        name="HomeMenuScreen"
        component={HomeMenuScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Subscription = () => {
 
  return (
    <Stack.Navigator initialRouteName="SubscriptionScreen">
      <Stack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfilePage = () => {
 
  return (
    <Stack.Navigator initialRouteName="ProfilePageScreen">
      <Stack.Screen
        name="ProfilePageScreen"
        component={ProfilePageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


const Lesson= () => {
 
  return (
    <Stack.Navigator initialRouteName="LessonScreen">
      <Stack.Screen
        name="LessonScreen"
        component={LessonScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeMenuTwo= () => {
 
  return (
    <Stack.Navigator initialRouteName="HomeMenuScreenTwo">
      <Stack.Screen
        name="HomeMenuScreenTwo"
        component={HomeMenuScreenTwo}
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

const OneExercise = () => {
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

const TwoExercise = () => {
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

const UserNewStudent = () => {
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

const GradeList = () => {
  return (
    <Stack.Navigator initialRouteName="GradeScreen">
      <Stack.Screen
        name="GradeScreen"
        component={GradeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Menu= () => {
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

const Makegroups= () => {
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
const GroupOne= () => {
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
const StudentCode= () => {
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
const MultipleStudent= () => {
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

const NewGroupOne= () => {
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
const NewGroupTwo= () => {
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
const NewGroupThree= () => {
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
const DashBoard= () => {
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

const ChooseAvtar= () => {
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

const NewStudentCodeName= () => {
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
const NewStudentsName= () => {
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
const NewStudentTwo= () => {
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
const TeacherName= () => {
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
const NewTeachersName= () => {
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
const ExerciseMultiplesOne= () => {
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
const ExerciseMultiplesTwo= () => {
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
const ExerciseMultiplesThree= () => {
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
const ExerciseMultiplesFour= () => {
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
const ExerciseMultiplesFive= () => {
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
const ExerciseMultiplesSix= () => {
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
const ExerciseMultiplesSeven= () => {
  return (
    <Stack.Navigator initialRouteName="ExerciseMultipleSeven">
      <Stack.Screen
        name="ExerciseMultipleSeven"
        component={ExerciseMultipleSeven}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ExerciseLearn= () => {
  return (
    <Stack.Navigator initialRouteName="LearnExreciseScreen">
      <Stack.Screen
        name="LearnExreciseScreen"
        component={LearnExreciseScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const GradeFirst= () => {
  return (
    <Stack.Navigator initialRouteName="FirstGradeScreen">
      <Stack.Screen
        name="FirstGradeScreen"
        component={FirstGradeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Subject= () => {
  return (
    <Stack.Navigator initialRouteName="SubjectsScreen">
      <Stack.Screen
        name="SubjectsScreen"
        component={SubjectsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Arabic= () => {
  return (
    <Stack.Navigator initialRouteName="ArabicScreen">
      <Stack.Screen
        name="ArabicScreen"
        component={ArabicScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ArabicSubject= () => {
  return (
    <Stack.Navigator initialRouteName="ArabicSubjectScreen">
      <Stack.Screen
        name="ArabicSubjectScreen"
        component={ArabicSubjectScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AlphaBetCar= () => {
  return (
    <Stack.Navigator initialRouteName="AlphaBetCarScreen">
      <Stack.Screen
        name="AlphaBetCarScreen"
        component={AlphaBetCarScreen}
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
        {/* <Stack.Screen
        name="listOfGrade"
        component={listOfGrade}
        options={{headerShown: false}}
      /> */}
      


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
                name="UserNewStudent"
                component={UserNewStudent}
                options={{headerShown: false}}
              />

            <Stack.Screen
                name="GradeList"
                component={GradeList}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{headerShown: false}}
              />

       
                <Stack.Screen
                name="Makegroups"
                component={Makegroups}
                options={{headerShown: false}}
              />

                  <Stack.Screen
                name="GroupOne"
                component={GroupOne}
                options={{headerShown: false}}
              />

             <Stack.Screen
                name="StudentCode"
                component={StudentCode}
                options={{headerShown: false}}
              />

               <Stack.Screen
                name="MultipleStudent"
                component={MultipleStudent}
                options={{headerShown: false}}
              />


            <Stack.Screen
                name="NewGroupOne"
                component={NewGroupOne}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="NewGroupTwo"
                component={NewGroupTwo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NewGroupThree"
                component={NewGroupThree}
                options={{headerShown: false}}
              />

                <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="ChooseAvtar"
                component={ChooseAvtar}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NewStudentCodeName"
                component={NewStudentCodeName}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="TeacherName"
                component={TeacherName}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="NewStudentsName"
                component={NewStudentsName}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="NewStudentTwo"
                component={NewStudentTwo}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="NewTeachersName"
                component={NewTeachersName}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="OneExercise"
                component={OneExercise}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="TwoExercise"
                component={TwoExercise}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ExerciseMultiplesOne"
                component={ExerciseMultiplesOne}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="ExerciseMultiplesThree"
                component={ExerciseMultiplesThree}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="ExerciseMultiplesTwo"
                component={ExerciseMultiplesTwo}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="ExerciseMultiplesFour"
                component={ExerciseMultiplesFour}
                options={{headerShown: false}}
              />
              
              <Stack.Screen
                name="ExerciseMultiplesFive"
                component={ExerciseMultiplesFive}
                options={{headerShown: false}}
              />
                 <Stack.Screen
                name="ExerciseMultiplesSix"
                component={ExerciseMultiplesSix}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="ExerciseMultiplesSeven"
                component={ExerciseMultiplesSeven}
                options={{headerShown: false}}
              />
              
              <Stack.Screen
                name="ExerciseLearn"
                component={ExerciseLearn}
                options={{headerShown: false}}
              />
           <Stack.Screen
                name="GradeFirst"
                component={GradeFirst}
                options={{headerShown: false}}
              />
                   <Stack.Screen
                name="Subject"
                component={Subject}
                options={{headerShown: false}}
              />
                 <Stack.Screen
                name="Arabic"
                component={Arabic}
                options={{headerShown: false}}
              />
              
              <Stack.Screen
                name="ArabicSubject"
                component={ArabicSubject}
                options={{headerShown: false}}
              />
                 <Stack.Screen
                name="AlphaBetCar"
                component={AlphaBetCar}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="Subscription"
                component={Subscription}
                options={{headerShown: false}}
              />
             
             <Stack.Screen
                name="HomeMenu"
                component={HomeMenu}
                options={{headerShown: false}}
              />
             
             <Stack.Screen
                name="HomeMenuTwo"
                component={HomeMenuTwo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{headerShown: false}}
              />
              
              <Stack.Screen
                name="UserEdit"
                component={UserEdit}
                options={{headerShown: false}}
              />

            <Stack.Screen
                name="Lesson"
                component={Lesson}
                options={{headerShown: false}}
              />
              
            <Stack.Screen
                name="Subjects"
                component={Subjects}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="NewAvatarTeacher"
                component={NewAvatarTeacher}
                options={{headerShown: false}}
              />
                <Stack.Screen
                name="NewTeacherPrint"
                component={NewTeacherPrint}
                options={{headerShown: false}}
              />
              
              
            </Stack.Navigator>
          </NavigationContainer>
         
     
       </>
  
     ) 
     }
  }