import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseMultipleTwoStyle from './ExerciseMultipleTwoStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";




export default class ExerciseMultipleTwo extends React.Component {
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
  groups(){
    this.props.navigation.navigate("multipleStudent");
  }

  render() {
      return (
      
    <View style={[ExerciseMultipleTwoStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       <HeaderWithBackComponent props={this.props} />
      

      <ScrollView>
      <View style={ExerciseMultipleTwoStyle.container}>
      
      <View style={ExerciseMultipleTwoStyle.btnTextContainer}>
     
      <View style={ExerciseMultipleTwoStyle.multipleCodeImage2Container}>
               {/* <View  style={ExercisMultipleThreeStyle.buttonStyle}> */}
               <View style={ExerciseMultipleTwoStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/toptxt.png")}
                          style={{
                              width: 150,
                              height: 60,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  {/* </View> */}
                  </View>
                  <View style={ExerciseMultipleTwoStyle.exerciseTwoImage}>
               <View  style={ExerciseMultipleTwoStyle.buttonStyle}>
               <Image
                          source={require("../../Image/tiger-icon.png")}
                          style={{
                              width: 180,
                              height: 200,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
                    <View  style={ExerciseMultipleTwoStyle.ImageLineStyle}>
               <Image
                          source={require("../../Image/tigerBelowImg.png")}
                          style={{
                              width: 150,
                              height: 80,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
              </View>
             
      </View>
      
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
