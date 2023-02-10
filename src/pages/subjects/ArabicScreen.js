import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ArabicScreenStyle from './ArabicScreenStyle';


export default class ArabicScreen extends React.Component {
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
      <View style={ArabicScreenStyle.container}>
      <View style={[ArabicScreenStyle.menuArea2]}>
      <View style={CommonStyle.logoOnlyHeader}>
                            <Image
                                source={require("../../Image/logo-icon.png")}
                                style={{
                                    width: 290,
                                    height: 60,
                                    resizeMode: "contain",
                                    marginTop:4
                                    }}  />
                        </View>
                        </View>
        
        <View style={ArabicScreenStyle.toptxtHeading}>
        <Text style={ArabicScreenStyle.toptxtHeadingStyle}>Create a pin</Text>
        </View>
                 
      <View style={ArabicScreenStyle.btnTextContainer}>

      <View style={ArabicScreenStyle.buttonContainerOne}>
        <View  style={ArabicScreenStyle.buttonStyle}>
                  <Text style={ArabicScreenStyle.newStudentNextTxt}>Arabic</Text>
                  </View>
              </View>

            
              </View>
        </View>
       

      </ScrollView>
   
      </View>

      );
  }
}