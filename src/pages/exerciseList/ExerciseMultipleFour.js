import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';
import ExerciseMultipleFourStyle from './ExerciseMultipleFourStyle';



export default class ExerciseMultipleFour extends React.Component {
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
      
    <View style={[ExerciseMultipleFourStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      

      <ScrollView>
      <View style={ExerciseMultipleFourStyle.container}>
      <View style={[ExerciseMultipleFourStyle.menuArea2]}>
    </View>
      <View style={ExerciseMultipleFourStyle.btnTextContainer}>
      <View style={ExerciseMultipleFourStyle.toplayoutContainer}>
        <View style={ExerciseMultipleFourStyle.multipleTopCodeContainer}>
               <View  style={ExerciseMultipleFourStyle.buttonStyle}>
                  <Text style={ExerciseMultipleFourStyle.studentCodeTxt}></Text>
             </View>
          </View>
        </View>
        <View style={ExerciseMultipleFourStyle.multipleContainertigerImage}>
               <View style={ExerciseMultipleFourStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/toptxt.png")}
                          style={{
                              width: 150,
                              height: 60,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  </View>

                  <View style={{flexDirection:'row',marginTop:60}}>
                  <Image
                          source={require("../../Image/tiger-icon.png")}
                          style={{
                              width: 150,
                              height: 120,
                              resizeMode: "contain",
                              }}
                              ></Image>
                                <Image
                          source={require("../../Image/rat.png")}
                          style={{
                              width: 150,
                              height: 120,
                              resizeMode: "contain",
                              marginStart:30
                              }}
                              ></Image>
                  </View>
                  <View style={{flexDirection:'row',marginTop:60}}>
                  <Image
                          source={require("../../Image/elephent.png")}
                          style={{
                              width: 150,
                              height: 120,
                              resizeMode: "contain",
                              }}
                              ></Image>
                                <Image
                          source={require("../../Image/ziraf.png")}
                          style={{
                              width: 150,
                              height: 120,
                              resizeMode: "contain",
                              marginStart:30
                              }}
                              ></Image>
                  </View>
                  <View style={ExerciseMultipleFourStyle.multipleBottemImage}>
               <View style={ExerciseMultipleFourStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/multipleBottemtxt.png")}
                          style={{
                              width: 50,
                              height: 40,
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
