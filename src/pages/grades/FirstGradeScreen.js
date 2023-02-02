import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import FrisGradeStyle from './FirstGradeStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class FirstGradeScreen extends React.Component {
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
      <View style={FrisGradeStyle.container}>
      <View style={[FrisGradeStyle.menuArea2]}>

        </View>
      <View style={FrisGradeStyle.btnTextContainer}>

     
        <View style={FrisGradeStyle.btncontainer}>
        <View style={FrisGradeStyle.buttonContainer}>
        <View  style={FrisGradeStyle.buttonStyle}>
                  <Text style={FrisGradeStyle.newStudentNextTxt}>English</Text>
                  </View>
              </View>
             
              </View>
              <View style={FrisGradeStyle.btncontainer}>
        <View style={FrisGradeStyle.buttonContainer}>
        <View  style={FrisGradeStyle.buttonStyle}>
                  <Text style={FrisGradeStyle.newStudentNextTxt}>Arabic</Text>
                  </View>
              </View>
             
              </View>
              <View style={FrisGradeStyle.btncontainer}>
        <View style={FrisGradeStyle.buttonContainer}>
        <View  style={FrisGradeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeThreeBtn();
            }} >
            <Text style={FrisGradeStyle.newStudentNextTxt}>Math</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={FrisGradeStyle.btncontainer}>
        <View style={FrisGradeStyle.buttonContainer}>
        <View  style={FrisGradeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={FrisGradeStyle.newStudentNextTxt}>grade5</Text>
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