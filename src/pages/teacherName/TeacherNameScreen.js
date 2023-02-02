import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import TeacherNameStyle from './TeacherNameStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class TeacherNameScreen extends React.Component {
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

  SignInBtn() {
    this.props.navigation.navigate("newStudentThree");
   
}
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={TeacherNameStyle.container}>
                <View style={[TeacherNameStyle.menuArea2]}>
                {/* <View style={[NewStudentStyle.menuCardBox,{}]}> */}
            {/* <View style={NewStudentStyle.languagesBox}>
            <View style={NewStudentStyle.languagesList}>
              <Text >Student Data</Text>
             
                  </View>
                  <Text >ABC 123</Text>
              </View> */}
              {/* </View> */}
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
                  <View style={TeacherNameStyle.newStudentText}>
              <Text  style={TeacherNameStyle.newStudentTxt}>teacher name</Text>
             
                  </View>
                  <View style={TeacherNameStyle.btncontainer}>
        <View style={TeacherNameStyle.buttonContainer}>
        <View  style={TeacherNameStyle.buttonStyle}>
        <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.newBtn();
              }} >
                 <Image source={require("../../Image/pic17.png")} style={{width: 180, height:170, resizeMode: 'contain',borderRadius:10}} />

               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                
                  </View>
              </View>
              <View style={TeacherNameStyle.newstudentImageContainer}>
               <View  style={TeacherNameStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
             activeOpacity={0.5}
              onPress={() => {
                this.SignInBtn();
              }} >
                  <Text style={TeacherNameStyle.signTxt}>Sign in different account</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
                
                  </View>
             
              </View>
              
                
                  </View>
                 
          
                </ScrollView>
          
                </View>
          
            );
          };

        }