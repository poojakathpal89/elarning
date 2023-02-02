import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import  NewStudentStyle  from '../newStudent2/NewStudentStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class NewStudentScreen extends React.Component {
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
    this.props.navigation.navigate("newStudentThree");
   
}
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={NewStudentStyle.container}>
                <View style={[NewStudentStyle.menuArea2]}>
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
                  <View style={NewStudentStyle.newStudentText}>
              <Text  style={NewStudentStyle.newStudentTxt}>ABC-123</Text>
             
                  </View>
                  <View style={NewStudentStyle.btncontainer}>
                  <View style={NewStudentStyle.buttonContainer}>
                  <View  style={NewStudentStyle.buttonStyle}>
                            <Text style={NewStudentStyle.newStudentNextTxt}>print</Text>
                            </View>
                        </View>
                        <View style={NewStudentStyle.buttonContainer}>
                          <View  style={NewStudentStyle.buttonStyle}>
                          <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextBtn();
                                        }}
                                    >
                                         <Text style={NewStudentStyle.newStudentNextTxt}>next</Text>
                                        
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