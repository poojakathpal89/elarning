import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import LearnExerciseStyle from './LearnExerciseStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";
import {FooterComponent,} from "../../component/AllComponent";



export default class LearnExreciseScreen extends React.Component {
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
  StarOneClick(){
    this.props.navigation.navigate("exerciseMultipleOne");
  }
  StarTwoClick(){
    this.props.navigation.navigate("exerciseMultipleTwo");
  }
  StarThreeClick(){
    this.props.navigation.navigate("exerciseMultipleThree");
  }

  render() {
      return (
      
    <View style={[LearnExerciseStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
       <HeaderWithBackComponent props={this.props} />
      <ScrollView>
      <View style={LearnExerciseStyle.container}>
      <View style={[LearnExerciseStyle.menuArea2]}>
      <View style={LearnExerciseStyle.multipleCodeImage2Container}>
                       <View style={LearnExerciseStyle.exerciseOneImage}>
               <Image
                          source={require("../../Image/exerciseonetxt.png")}
                          style={{
                              width: 100,
                              height: 20,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  </View>
        </View>
      <View style={LearnExerciseStyle.btnTextContainer}>
    <View style={LearnExerciseStyle.studentCodeContainer}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image
                          source={require("../../Image/learntxt-icon.png")}
                          style={{
                              width: 100,
                              height: 50,
                              resizeMode: "contain",
                              }}
                          />
                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarOneClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarTwoClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarThreeClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

                    </View>
              </View>

              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
              </View>
              </View>
      </View>
        </View>
       
 </ScrollView>
 <FooterComponent props={this.props} active={"home"} /> 

      </View>

      );
  }
}
