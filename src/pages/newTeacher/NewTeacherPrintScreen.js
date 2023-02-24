import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import NewTeacherPrintStyle from '../newTeacher/NewTeacherPrintStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class NewTeacherPrintScreen extends React.Component {
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

  nextBtn() {
    this.props.navigation.navigate("makegroups");
   
}
nextPrint(){
    this.props.navigation.navigate("makegroups");
  
}
makegroups
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={NewTeacherPrintStyle.container}>
                <View style={[NewTeacherPrintStyle.menuArea2]}>
              
              <View style={CommonStyle.logoOnlyHeader}>
                      {/* <Image
                          source={require("../../Image/logo-icon.png")}
                          style={{
                              width: 350,
                              height: 70,
                              resizeMode: "contain",
                              }}
                          /> */}
                     
  <Text  style={NewTeacherPrintStyle.newTeacherTxt}> برجاء حفظ 
  الرمز الدخول للتمكن
  من العوده للتسجيل </Text>
                  </View>
          
              
          
                  </View>
                  <View style={NewTeacherPrintStyle.newStudentText}>
              <Text  style={NewTeacherPrintStyle.newStudentTxt}>ABC-123</Text>
             
                  </View>
                  <View style={NewTeacherPrintStyle.btncontainer}>
                  <View style={NewTeacherPrintStyle.buttonContainer}>
                  <View  style={NewTeacherPrintStyle.buttonStyle}>
                  <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextPrint();
                                        }}
                                    >
                            <Text style={NewTeacherPrintStyle.newStudentNextTxt}>print</Text>
                                        
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View style={NewTeacherPrintStyle.buttonContainer}>
                          <View  style={NewTeacherPrintStyle.buttonStyle}>
                          <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextBtn();
                                        }}
                                    >
                                         <Text style={NewTeacherPrintStyle.newStudentNextTxt}>next</Text>
                                        
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