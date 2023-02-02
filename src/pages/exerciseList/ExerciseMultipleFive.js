import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';
import ExerciseMultipleFiveStyle from './ExerciseMultipleFiveStyle';



export default class ExerciseMultipleFive extends React.Component {
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
      
    <View style={[ExerciseMultipleFiveStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      

      <ScrollView>
      <View style={ExerciseMultipleFiveStyle.container}>
      <View style={[ExerciseMultipleFiveStyle.menuArea2]}>
    </View>
      <View style={ExerciseMultipleFiveStyle.btnTextContainer}>
      <View style={ExerciseMultipleFiveStyle.toplayoutContainer}>
        <View style={ExerciseMultipleFiveStyle.multipleTopCodeContainer}>
               <View  style={ExerciseMultipleFiveStyle.buttonStyle}>
                  <Text style={ExerciseMultipleFiveStyle.studentCodeTxt}></Text>
             </View>
          </View>
        </View>
        <View style={ExerciseMultipleFiveStyle.multipleContainertigerImage}>
               <View style={ExerciseMultipleFiveStyle.exerciseOneImage}>
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

                  <View style={{marginTop:60,alignItems:'center'}}>
                  <Image
                          source={require("../../Image/tiger-icon.png")}
                          style={{
                              width: 190,
                              height: 190,
                              resizeMode: "contain",
                              }}
                              ></Image>
                             </View>





             <View style={ExerciseMultipleFiveStyle.multipleContainerBottem}>
               <View style={ExerciseMultipleFiveStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/multipleBottemtxt.png")}
                          style={{
                              width: 60,
                              height: 60,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  </View>
<View style={{flexDirection:'row'}}>

<View style={{backgroundColor:'red'}}>
                  <View style={ExerciseMultipleFiveStyle.smallBoxBottem}>
               </View>
                  </View>
                  <View style={{backgroundColor:'red'}}>
                  <View style={ExerciseMultipleFiveStyle.smallBoxBottem}>
               </View>
                  </View>
                  <View style={{backgroundColor:'red'}}>
                  <View style={ExerciseMultipleFiveStyle.smallBoxBottem}>
               </View>
                  </View>
                  </View>
                   </View>
      
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
