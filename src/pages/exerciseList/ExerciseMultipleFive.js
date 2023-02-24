import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';
import ExerciseMultipleFiveStyle from './ExerciseMultipleFiveStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";



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
             <HeaderWithBackComponent props={this.props} />
      <ScrollView>
      <View style={ExerciseMultipleFiveStyle.container}>
      
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

                  <View style={{marginTop:40,alignItems:'center'}}>
                  <Image
                          source={require("../../Image/tiger-icon.png")}
                          style={{
                              width: 190,
                              height: 190,
                              resizeMode: "contain",
                              }}
                              ></Image>
                             </View>


<View style={{flexDirection:'row',width:"100%",marginTop:40,alignItems:'center',justifyContent:'center'}}>
  <View style={{width:"13%",backgroundColor:'#fff',height:50,marginEnd:10,marginStart:10, borderRadius:10,}}>
  </View>
  <View style={{width:"13%",backgroundColor:'#fff',height:50,marginEnd:10,marginStart:10, borderRadius:10,}}>
 

</View>
<View style={{width:"13%",backgroundColor:'green',height:50,marginEnd:10,marginStart:10, borderRadius:10,}}>


</View>

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

                   </View>
      
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
