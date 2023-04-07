import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
// import NewStudentStyleTwo from './NewStudentStyleTwo';
import CodeScreenStyle from './CodeScreenStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import {FooterComponentWithTeacher} from "../../component/AllComponent";
import { GlobalService } from '../../services/AllServices';


export default class CodeScreen extends React.Component {
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
    if (GlobalService.regData.userType == 1){
        this.props.navigation.navigate("GradeList");
    }
    
    else {GlobalService.regData.userType == 2}
    this.props.navigation.navigate("CreateGroups");

    
}

nextPrint(){
    this.props.navigation.navigate("newStudentThree");
}
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={CodeScreenStyle.container}>
                <View style={[CodeScreenStyle.menuArea2]}>
          
              <View style={CodeScreenStyle.logoOnlyHeader}>
                      <Image
                          source={require("../../Image/text-title.png")}
                          style={{
                              width: 350,
                              height: 70,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
          
              
          
                  </View>
                  <View style={CodeScreenStyle.newStudentText}>
              <Text  style={CodeScreenStyle.newStudentTxt}>ABC-123</Text>
             
                  </View>
                  <View style={CodeScreenStyle.btncontainer}>
                  <View style={CodeScreenStyle.buttonContainer}>
                  <View  style={CodeScreenStyle.buttonStyle}>
                  <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextPrint();
                                        }}
                                    >
                                         <Text style={CodeScreenStyle.newStudentNextTxt}>print</Text>
                                        
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View style={CodeScreenStyle.buttonContainer}>
                          <View  style={CodeScreenStyle.buttonStyle}>
                          <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextBtn();
                                        }}
                                    >
                                         <Text style={CodeScreenStyle.newStudentNextTxt}>next</Text>
                                        
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                           
                            </View>
                        </View>
                        </View>
                
                  </View>
                 
          
                </ScrollView>
                {/* <FooterComponentWithTeacher props={this.props} active={"home"} />  */}

                </View>
          
            );
          };

        }