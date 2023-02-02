import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import NewStudentStyleTwo from './NewStudentStyleTwo';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';


export default class NewStudentScreenTwo extends React.Component {
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
    this.props.navigation.navigate("newStudentThree");
}
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={NewStudentStyleTwo.container}>
                <View style={[NewStudentStyleTwo.menuArea2]}>
                {/* <View style={[NewStudentStyle.menuCardBox,{}]}> */}
            {/* <View style={NewStudentStyle.languagesBox}>
            <View style={NewStudentStyle.languagesList}>
              <Text >Student Data</Text>
             
                  </View>
                  <Text >ABC 123</Text>
              </View> */}
              {/* </View> */}
              <View style={NewStudentStyleTwo.logoOnlyHeader}>
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
                  <View style={NewStudentStyleTwo.newStudentText}>
              <Text  style={NewStudentStyleTwo.newStudentTxt}>ABC-123</Text>
             
                  </View>
                  <View style={NewStudentStyleTwo.btncontainer}>
                  <View style={NewStudentStyleTwo.buttonContainer}>
                  <View  style={NewStudentStyleTwo.buttonStyle}>
                  <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextPrint();
                                        }}
                                    >
                                         <Text style={NewStudentStyleTwo.newStudentNextTxt}>print</Text>
                                        
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <View style={NewStudentStyleTwo.buttonContainer}>
                          <View  style={NewStudentStyleTwo.buttonStyle}>
                          <TouchableOpacity
                                        disabled={this.state.loading}
                                        
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextBtn();
                                        }}
                                    >
                                         <Text style={NewStudentStyleTwo.newStudentNextTxt}>next</Text>
                                        
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