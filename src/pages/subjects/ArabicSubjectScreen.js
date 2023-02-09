import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ArabicSubjectStyle from './ArabicSubjectStyle';


export default class ArabicSubjectScreen extends React.Component {
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
      <View style={ArabicSubjectStyle.container}>
      <View style={[ArabicSubjectStyle.menuArea2]}>

        </View>
      <View style={ArabicSubjectStyle.btnTextContainer}>

     
        <View style={ArabicSubjectStyle.btncontainer}>
        <View style={ArabicSubjectStyle.buttonContainer}>
        <View  style={ArabicSubjectStyle.buttonStyle}>
                  <Text style={ArabicSubjectStyle.newStudentNextTxt}>Alphabets</Text>
                  </View>
              </View>
             
              </View>
              <View style={ArabicSubjectStyle.btncontainer}>
        <View style={ArabicSubjectStyle.buttonContainer}>
        <View  style={ArabicSubjectStyle.buttonStyle}>
                  <Text style={ArabicSubjectStyle.newStudentNextTxt}>colors</Text>
                  </View>
              </View>
             
              </View>
              <View style={ArabicSubjectStyle.btncontainer}>
        <View style={ArabicSubjectStyle.buttonContainer}>
        <View  style={ArabicSubjectStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeThreeBtn();
            }} >
            <Text style={ArabicSubjectStyle.newStudentNextTxt}>numbers</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={ArabicSubjectStyle.btncontainer}>
        <View style={ArabicSubjectStyle.buttonContainer}>
        <View  style={ArabicSubjectStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={ArabicSubjectStyle.newStudentNextTxt}>الحيوانات</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                 
                  </View>
              </View>
             
              </View>

              <View style={ArabicSubjectStyle.btncontainer}>
        <View style={ArabicSubjectStyle.buttonContainer}>
        <View  style={ArabicSubjectStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={ArabicSubjectStyle.newStudentNextTxt}>الفواكه والخضروات</Text>
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