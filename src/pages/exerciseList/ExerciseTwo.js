import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';



export default class ExerciseTwo extends React.Component {
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
      
    <View style={[ExerciseTwoStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      

      <ScrollView>
      <View style={ExerciseTwoStyle.container}>
      <View style={[ExerciseTwoStyle.menuArea2]}>
   

      <View style={ExerciseTwoStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/exerciseonetxt.png")}
                          style={{
                              width: 150,
                              height: 70,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
        </View>
      <View style={ExerciseTwoStyle.btnTextContainer}>
    <View style={ExerciseTwoStyle.studentCodeContainer}>
               <View  style={ExerciseTwoStyle.buttonStyle}>
                  <Text style={ExerciseTwoStyle.studentCodeTxt}></Text>
                    </View>
              </View>
             

              <View style={ExerciseTwoStyle.exerciseTwoImage}>
               <View  style={ExerciseTwoStyle.buttonStyle}>
               <Image source={require("../../Image/pic4.png")} style={{width: 150, height:300, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>

            
            
           
      </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
