import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import { HeaderWithBackComponent } from "../../component/AllComponent";
import ExerciseMultipleSevenStyle from './ExerciseMultipleSevenstyle';


export default class ExerciseMultipleSeven extends React.Component {
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
      
    <View style={[ExerciseMultipleSevenStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
       <HeaderWithBackComponent props={this.props} />
      <ScrollView>
      <View style={ExerciseMultipleSevenStyle.container}>
      <View style={[ExerciseMultipleSevenStyle.menuArea2]}>
   

      <View style={ExerciseMultipleSevenStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/pic12.png")}
                          style={{
                              width: 200,
                              height: 200,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
        </View>
      <View style={ExerciseMultipleSevenStyle.btnTextContainer}>
    
              <View style={ExerciseMultipleSevenStyle.starImage}>
               <View  style={ExerciseMultipleSevenStyle.buttonStyle}>
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 50, height:50, resizeMode: 'contain',borderRadius:10,alignItems:'center'}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 50, height:50, resizeMode: 'contain',borderRadius:10,alignItems:'center'}} />
                  <Image source={require("../../Image/yellowStar.png")} style={{width: 50, height:50, resizeMode: 'contain',borderRadius:10,alignItems:'center'}} />

                    </View>
              </View>

</View>
<View style={{ flex:1,flexDirection:'row',width:'100%',alignItems:'center',justifyContent:"center",marginTop:60}}>


<View style={ExerciseMultipleSevenStyle.txtContainerOne}>
<Image source={require("../../Image/multipleBottemtxt.png")} style={{width: 30, height:30, resizeMode: 'contain',borderRadius:10}} />

              </View>
              <View style={ExerciseMultipleSevenStyle.txtContainerTwo}>
              <Image source={require("../../Image/multipleBottemtxt.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />

              </View>
              </View>
        </View>
        
 </ScrollView>
   
      </View>

      );
  }
}
