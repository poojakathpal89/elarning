import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import LearnExerciseStyle from './LearnExerciseStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";
import {FooterComponent,} from "../../component/AllComponent";
// import RBSheet from "npm i react-native-simple-bottom-sheet";
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";





export default class LearnExreciseScreen extends React.Component {
  constructor(props) {
      super(props);
      console.log(props)
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false,
      offerItem:{id:"dd","name":"d"}
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      this._isMounted = true;
     
      if (this._isMounted) {
         this.getdata();
      }
  });
      // console.log(StringsOfLanguages.languageObj);
  }
  // groups(){
  //   this.props.navigation.navigate("multipleStudent");
  // }
  // StarOneClick(){
  //   this.props.navigation.navigate("exerciseMultipleOne");
  // }
  // StarTwoClick(){
  //   this.props.navigation.navigate("exerciseMultipleTwo");
  // }
  // StarThreeClick(){
  //   this.props.navigation.navigate("exerciseMultipleThree");
  // }
  // starFourRowClick(){
  //   this.props.navigation.navigate("exerciseMultipleFour");

  // }
  // starFiveRowClick(){
  //   this.props.navigation.navigate("exerciseMultipleFive");

  // }
  // starSixRowClick(){
  //   this.props.navigation.navigate("exerciseMultipleSix");

  // }
  // starSevenRowClick(){
  //   this.props.navigation.navigate("exerciseMultipleSeven");

  // }

  // StarSecondFirstClick(){
  //   this.props.navigation.navigate("exerciseMultipleThree");

  // }
//   getdata(){
//     console.log("ghgsdhjdshjg",this.props.route)
//     // let data = this.props.route.params.item;
//     // if (this.props.route.params.item) {
//     //     this.setState({ offerItem: this.props.route.params.item });
//     // }
// }
getdata(){
  let data = this.props.route.params;
  console.log(data)
  // if (this.props.route.params.item) {
  //    /// this.setState({ offerItem: this.props.route.params.item });
  // }
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
              <Text>  {this.state.offerItem.name}</Text>
                  {/* <Image
                          source={require("../../Image/learntxt-icon.png")}
                          style={{
                              width: 100,
                              height: 50,
                              resizeMode: "contain",
                              }}
                          /> */}
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
         this.StarOneClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
         this.StarOneClick();
        }} >
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarTwoClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarTwoClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarTwoClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                 

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarThreeClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarThreeClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.StarThreeClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                  
                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFourRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFourRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFourRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>

                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFiveRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFiveRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starFiveRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                 
                    </View>
              </View>
              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSixRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSixRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSixRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                 

                    </View>
              </View>

              <View style={LearnExerciseStyle.starImage}>
               <View  style={LearnExerciseStyle.buttonStyle}>
               <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSevenRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSevenRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          this.starSevenRowClick();
        }}
        >
    
    <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
        </TouchableOpacity>
                 
              </View>
              </View>
      </View>
        </View>
       
 </ScrollView>


          <View style={{ flex: 1 }}>
                    <RBSheet
                        ref={(ref) => {
                            this.RBSheetEarn = ref;
                        }}
                        height={200}
                        openDuration={150}
                        customStyles={{
                            container: {
                                borderTopRightRadius: moderateScale(24),
                                borderTopLeftRadius: moderateScale(24),
                                paddingVertical: moderateScale(20),
                                paddingHorizontal: moderateScale(20),
                            },
                        }}
                    >
                        <ScrollView >
                            <View style={LearnExerciseStyle.bottomActionSheetBox}>
                                <View style={LearnExerciseStyle.bottomswiperHeadingBox}>
                                <View style={{flexDirection:'row',flex:1}}>
                                      <Image source={require("../../Image/pic12.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                                      <Image source={require("../../Image/star1.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>
                              <Image source={require("../../Image/dollersign.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>

                              </View>
                                    
                                </View>
                                <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Settings'}</Text>
                                      </View>
                                      <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'share app'}</Text>
                                      </View>
                                      <View style={LearnExerciseStyle.shareWithFrndBg}>
                                    <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Log out / change account'}</Text>
                                      </View>

                                <View style={{ alignItems: "center" }}>
                                    <TouchableOpacity
                                        style={[LearnExerciseStyle.earnComnButtonStyle,LearnExerciseStyle.earnBtn]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            // this.InvitePopup();
                                        }} >
                                      </TouchableOpacity>
                                   

                                </View>
                            
                            </View>
                        </ScrollView>
                    </RBSheet>
                </View>
 

      </View>

      );
  }
}
