import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import HomeMenuScreenThreeStyle from './HomeMenuThreeStyle';


export default class HomeMenuScreenThree extends React.Component {
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
      <View style={HomeMenuScreenThreeStyle.container}>

        <View style={HomeMenuScreenThreeStyle.btnTextContainer}>

      <View style={HomeMenuScreenThreeStyle.buttonContainerOne}>
        <View  style={HomeMenuScreenThreeStyle.buttonStyle}>
                  <Text style={HomeMenuScreenThreeStyle.newStudentNextTxt}>اللغه العربيه</Text>
                  </View>
              </View>

              </View>
        </View>
       

      </ScrollView>
   
      </View>

      );
  }
}