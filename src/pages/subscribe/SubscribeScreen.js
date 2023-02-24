import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import SubscribeStyle from './SubscribeStyle';
import { HeaderWithBackComponent } from "../../component/AllComponent";



export default class SubscribeScreen extends React.Component {
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
  gradeFourBtn() {
    this.props.navigation.navigate("teacherName");
   
}
gradeThreeBtn() {
  this.props.navigation.navigate("newStudentName");
 
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
              <HeaderWithBackComponent props={this.props} />
 <ScrollView>
      <View style={SubscribeStyle.container}>
    
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,fontWeight:'700',}}>X</Text>
</View>
        <View style={SubscribeStyle.toptxtHeading}>
        <Text style={SubscribeStyle.toptxtHeadingStyle}>SUBSCRIBE NOW AND UNLOCK ALL THE FEATURES</Text>
        </View>

        <View style={SubscribeStyle.monthsConatiner}>

        <Text style={SubscribeStyle.monthtext}>6 MONTHS</Text>
        <Text style={SubscribeStyle.dollterText}>15 DOLLARS</Text>
      
        </View>
        <View style={SubscribeStyle.monthsConatinerTwo}>

<Text style={SubscribeStyle.monthtext}>12 MONTHS</Text>
<Text style={SubscribeStyle.dollterText}>20 DOLLARS</Text>

</View>
<View style={SubscribeStyle.payPalBtnMainContainer}>
<View style={SubscribeStyle.buttonPaypalOne}>
<View  style={SubscribeStyle.buttonStyeOne}>
                <Text  style={SubscribeStyle.buttonText}> بتسجيل الدخول</Text>
              </View>
              </View>
              <View style={SubscribeStyle.buttonPaypalTwo}>
               <View  style={SubscribeStyle.buttonStyeTwo}>
                <Text>P</Text>
              </View>
              </View>

              </View>
                 
     
        </View>
       

      </ScrollView>
   
      </View>

      );
  }
}