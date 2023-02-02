import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseMultipleOneStyle from './ExerciseMultipleOneStyle';



export default class ExerciseMultipleOne extends React.Component {
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
      
    <View style={[ExerciseMultipleOneStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      

      <ScrollView>
      <View style={ExerciseMultipleOneStyle.container}>
      <View style={[ExerciseMultipleOneStyle.menuArea2]}>
   

   
        </View>
      <View style={ExerciseMultipleOneStyle.btnTextContainer}>
      <View style={ExerciseMultipleOneStyle.toplayoutContainer}>
      <Text style={{marginTop:10,marginStart:10}}>?</Text>
      <Text style={{position: 'absolute', right: 20,marginTop:14}}>X</Text>
    <View style={ExerciseMultipleOneStyle.studentCodeContainer}>
               <View  style={ExerciseMultipleOneStyle.buttonStyle}>
                  <Text style={ExerciseMultipleOneStyle.studentCodeTxt}></Text>
                  <Text>X</Text>
                 
                    </View>
              </View>
              </View>
              <View style={ExerciseMultipleOneStyle.soundImage}>
                <View style={{ position: 'absolute', right: 50}}> 
              <Image
                          source={require("../../Image/sound.png")}
                          style={{
                              width: 40,
                              height: 100,
                              resizeMode: "contain",
                             
                              }}
                          />
                          </View>
            
              <View style={ExerciseMultipleOneStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/toptxt.png")}
                          style={{
                              width: 150,
                              height: 110,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  </View>

              <View style={ExerciseMultipleOneStyle.exerciseTwoImage}>
               <View  style={ExerciseMultipleOneStyle.buttonStyle}>
               <Image
                          source={require("../../Image/i.png")}
                          style={{
                              width: 150,
                              height: 170,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
                    <View  style={ExerciseMultipleOneStyle.ImageLineStyle}>
               <Image
                          source={require("../../Image/Line.png")}
                          style={{
                              width: 150,
                              height: 20,
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
