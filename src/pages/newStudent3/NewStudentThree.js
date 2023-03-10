import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import  NewStudentthreeStyle  from '../newStudent3/NewStudentthreeStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class NewStudentThree extends React.Component {
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
  gradeOneBtn(){
    this.props.navigation.navigate("typeOfGrade");
  
  }
  gradeTwoBtn(){
    this.props.navigation.navigate("typeOfGrade");

  }
  gradeThreeBtn() {
    this.props.navigation.navigate("typeOfGrade");
   
  }
  gradeFourBtn() {
    this.props.navigation.navigate("typeOfGrade");
   
}



  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
      <ScrollView>
      <View style={NewStudentthreeStyle.container}>
      <View style={[NewStudentthreeStyle.menuArea2]}>
   
    <View style={CommonStyle.logoOnlyHeader}>
            <Image
                source={require("../../Image/logo-icon.png")}
                style={{
                    width: 350,
                    height: 70,
                    resizeMode: "contain",
                    }}
                />
        </View>

    

        </View>
      <View style={NewStudentthreeStyle.btnTextContainer}>

     
      <View style={NewStudentthreeStyle.btncontainer}>
        <View style={NewStudentthreeStyle.buttonContainer}>
        <View  style={NewStudentthreeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeOneBtn();
            }} >
            <Text style={NewStudentthreeStyle.newStudentNextTxt}>1th grade</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
          
              <View style={NewStudentthreeStyle.btncontainer}>
        <View style={NewStudentthreeStyle.buttonContainer}>
        <View  style={NewStudentthreeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeTwoBtn();
            }} >
            <Text style={NewStudentthreeStyle.newStudentNextTxt}>2th grade</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={NewStudentthreeStyle.btncontainer}>
        <View style={NewStudentthreeStyle.buttonContainer}>
        <View  style={NewStudentthreeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeThreeBtn();
            }} >
            <Text style={NewStudentthreeStyle.newStudentNextTxt}>3th grade</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={NewStudentthreeStyle.btncontainer}>
        <View style={NewStudentthreeStyle.buttonContainer}>
        <View  style={NewStudentthreeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={NewStudentthreeStyle.newStudentNextTxt}>4th grade</Text>
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

