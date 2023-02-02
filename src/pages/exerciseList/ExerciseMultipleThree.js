import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';
import ExerciseMultipleOneStyle from './ExerciseMultipleOneStyle';
import ExercisMultipleThreeStyle from './ExerciseMultipleThreeStyle';



export default class ExerciseMultipleThree extends React.Component {
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
      
    <View style={[ExercisMultipleThreeStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      

      <ScrollView>
      <View style={ExercisMultipleThreeStyle.container}>
      <View style={[ExercisMultipleThreeStyle.menuArea2]}>
   

   
        </View>
      <View style={ExercisMultipleThreeStyle.btnTextContainer}>
      <View style={ExercisMultipleThreeStyle.toplayoutContainer}>
        <View style={ExercisMultipleThreeStyle.multipleTopCodeContainer}>
               <View  style={ExercisMultipleThreeStyle.buttonStyle}>
                  <Text style={ExercisMultipleThreeStyle.studentCodeTxt}></Text>
             </View>
          </View>
        </View>
        <View style={ExercisMultipleThreeStyle.multipleCodeImage2Container}>
               <View style={ExerciseMultipleOneStyle.exerciseOneImage}>
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
             
      </View>
      
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
