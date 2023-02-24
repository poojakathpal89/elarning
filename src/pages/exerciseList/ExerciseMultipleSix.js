import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseMultipleSixStyle from './ExerciseMultipleSixStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";



export default class ExerciseMultipleSix extends React.Component {
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
      
    <View style={[ExerciseMultipleSixStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
             <HeaderWithBackComponent props={this.props} />
      

      <ScrollView>
      <View style={ExerciseMultipleSixStyle.container}>
     
      <View style={ExerciseMultipleSixStyle.btnTextContainer}>
     
      <View style={ExerciseMultipleSixStyle.multipleCodeImage2Container}>
               <View style={ExerciseMultipleSixStyle.exerciseOneImage}>
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
                  <View style={ExerciseMultipleSixStyle.exerciseTwoImage}>
               <View  style={ExerciseMultipleSixStyle.buttonStyle}>
               <Image
                          source={require("../../Image/tigerBelowImg.png")}
                          style={{
                              width: 150,
                              height: 70,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
                    <View  style={ExerciseMultipleSixStyle.buttonStyle}>
               <Image
                          source={require("../../Image/tigerBelowImg.png")}
                          style={{
                              width: 100,
                              height: 70,
                              resizeMode: "contain",
                              }}
                          />
                    </View>

                    <View  style={ExerciseMultipleSixStyle.buttonStyle}>
               <Image
                          source={require("../../Image/tigerBelowImg.png")}
                          style={{
                              width: 100,
                              height: 70,
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
