import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import PraticLatterScreenStyle  from './PraticLatterScreenStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import { HeaderWithBackComponent } from "../../component/AllComponent";


export default class PraticLatterScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
  }
  oneBtn() {
    this.props.navigation.navigate("exerciseLearn");
   
}
twoBtn(){
  this.props.navigation.navigate("exerciseLearn");
 
}
gradeThreeBtn() {
  this.props.navigation.navigate("exerciseLearn");
 
}
gradeFourBtn(){
  this.props.navigation.navigate("exerciseLearn");

}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
           {/* <HeaderWithBackComponent props={this.props} /> */}

      <ScrollView>
      <View style={PraticLatterScreenStyle.container}>
      
      <View style={PraticLatterScreenStyle.btnTextContainer}>

     
        <View style={PraticLatterScreenStyle.btncontainer}>
        <View style={PraticLatterScreenStyle.buttonContainer}>
        <View  style={PraticLatterScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.oneBtn();
            }} >
                  <Text style={PraticLatterScreenStyle.newStudentNextTxt}>الرياضيات</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={PraticLatterScreenStyle.btncontainer}>
        <View style={PraticLatterScreenStyle.buttonContainer}>
        <View  style={PraticLatterScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.twoBtn();
            }} >
                  <Text style={PraticLatterScreenStyle.newStudentNextTxt}>الرياضيات</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={PraticLatterScreenStyle.btncontainer}>
        <View style={PraticLatterScreenStyle.buttonContainer}>
        <View  style={PraticLatterScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeThreeBtn();
            }} >
            <Text style={PraticLatterScreenStyle.newStudentNextTxt}>الرياضيات</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={PraticLatterScreenStyle.btncontainer}>
        <View style={PraticLatterScreenStyle.buttonContainer}>
        <View  style={PraticLatterScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={PraticLatterScreenStyle.newStudentNextTxt}>الرياضيات</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>
             
              </View>
              <View style={PraticLatterScreenStyle.btncontainer}>
        <View style={PraticLatterScreenStyle.buttonContainer}>
        <View  style={PraticLatterScreenStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.gradeFourBtn();
            }} >
            <Text style={PraticLatterScreenStyle.newStudentNextTxt}>الرياضيات</Text>
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