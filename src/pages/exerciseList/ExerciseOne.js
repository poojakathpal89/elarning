import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseOneStyle from './ExerciseOneStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";


export default class ExerciseOne extends React.Component {
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
      
    <View style={[ExerciseOneStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
       <HeaderWithBackComponent props={this.props} />
      <ScrollView>
      <View style={ExerciseOneStyle.container}>
      <View style={[ExerciseOneStyle.menuArea2]}>
   

      <View style={ExerciseOneStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/exerciseonetxt.png")}
                          style={{
                              width: 150,
                              height: 50,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
        </View>
      <View style={ExerciseOneStyle.btnTextContainer}>
            <View style={ExerciseOneStyle.studentCodeContainer}>
                      <View  style={ExerciseOneStyle.buttonStyle}>
                          <Text style={ExerciseOneStyle.studentCodeTxt}>hgfhdsjg</Text>
                            </View>
              </View>

        <View style={{width:"100%"}}>
        <Image source={require("../../Image/pic12.png")} style={{width: 50, height:40, resizeMode: 'contain',borderRadius:10}} />

             
              <View style={ExerciseOneStyle.starImage}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>

        <View  style={ExerciseOneStyle.image2Container}>


              <View style={ExerciseOneStyle.starImage2}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
              </View>
              <View style={ExerciseOneStyle.starImage}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
              <View style={ExerciseOneStyle.starImage}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
              <View style={ExerciseOneStyle.starImage}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
              <View style={ExerciseOneStyle.starImage}>
               <View  style={ExerciseOneStyle.buttonStyle}>
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/star1.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
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
