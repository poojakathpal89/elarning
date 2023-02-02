import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import NewStudentNameStyle from './NewStudentNameStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class NewStudentNameCodeScreen extends React.Component {
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
                <View style={NewStudentNameStyle.container}>
                <View style={[NewStudentNameStyle.menuArea2]}>
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
                  <View style={NewStudentNameStyle.newStudentText}>
              <Text  style={NewStudentNameStyle.newStudentTxt}>Student Name</Text>
             
                  </View>
                  <View style={NewStudentNameStyle.btncontainer}>
        <View style={NewStudentNameStyle.buttonContainer}>
        <View  style={NewStudentNameStyle.buttonStyle}>
        <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.newBtn();
              }} >
                 <Image source={require("../../Image/pic12.png")} style={{width: 180, height:70, resizeMode: 'contain',borderRadius:10}} />

               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                
                  </View>
              </View>
              <View style={NewStudentNameStyle.newstudentImageContainer}>
               <View  style={NewStudentNameStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
             activeOpacity={0.5}
              onPress={() => {
                this.SignInBtn();
              }} >
                  <Text style={NewStudentNameStyle.signTxt}>Sign in different account</Text>
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