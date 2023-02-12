import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import HomeScreenStyle from './HomeMenuScreenStyle';


export default class HomeMenuScreen extends React.Component {
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
      <View style={HomeScreenStyle.container}>
      <View style={[HomeScreenStyle.menuArea2]}>

        </View>
      <View style={HomeScreenStyle.btnTextContainer}>

     
        <View style={HomeScreenStyle.btncontainer}>
        <View style={HomeScreenStyle.buttonContainer}>
        <View  style={HomeScreenStyle.buttonStyle}>
                  <Text style={HomeScreenStyle.newStudentNextTxt}>الصف الاول</Text>
                  </View>
              </View>
             
              </View>
              <View style={HomeScreenStyle.btncontainer}>
        <View style={HomeScreenStyle.buttonContainer}>
        <View  style={HomeScreenStyle.buttonStyle}>
                  <Text style={HomeScreenStyle.newStudentNextTxt}>الصف الثاني</Text>
                  </View>
              </View>
             
              </View>
              <View style={HomeScreenStyle.btncontainer}>
        <View style={HomeScreenStyle.buttonContainer}>
        <View  style={HomeScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeThreeBtn();
            }} >
            <Text style={HomeScreenStyle.newStudentNextTxt}>الصف الثالث</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={HomeScreenStyle.btncontainer}>
        <View style={HomeScreenStyle.buttonContainer}>
        <View  style={HomeScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={HomeScreenStyle.newStudentNextTxt}>الصف الرابع</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                 
                  </View>
              </View>
             
              </View>
      </View>
        </View>
       

      </ScrollView>
   
      </View>

      );
  }
}