import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import HomeMenuScreenTwoStyle from './HomeMenuScreenTwoStyle';


export default class HomeMenuScreenTwo extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
  }
  gradeFourBtn() {
    this.props.navigation.navigate("teacherName");
   
}
gradeThreeBtn() {
  this.props.navigation.navigate("newStudentName");
 
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={HomeMenuScreenTwoStyle.container}>

        <View style={HomeMenuScreenTwoStyle.btnTextContainer}>

      <View style={HomeMenuScreenTwoStyle.buttonContainerOne}>
        <View  style={HomeMenuScreenTwoStyle.buttonStyle}>
                  <Text style={HomeMenuScreenTwoStyle.newStudentNextTxt}>اللغه العربيه</Text>
                  </View>
              </View>

              <View style={HomeMenuScreenTwoStyle.buttonContainerTwo}>
        <View  style={HomeMenuScreenTwoStyle.buttonStyle}>
                  <Text style={HomeMenuScreenTwoStyle.newStudentNextTxt}>الرياضيات</Text>
                  </View>
              </View>
              </View>
        </View>
       

      </ScrollView>
   
      </View>

      );
  }
}