import React from 'react';
import {Text,Image,TextInput, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import NewGroupThreeStyle from './NewGroupThreeStyle';
import { color } from 'react-native-reanimated';


export default class NewGroupThreeScreen extends React.Component {
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


  render() {
      return (
      
    <View style={[NewGroupThreeStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={NewGroupThreeStyle.container}>
      <View style={[NewGroupThreeStyle.menuArea2]}>
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginTop:20}}>X</Text>
</View>


    <View style={NewGroupThreeStyle.newStudentText}>
              <Text  style={NewGroupThreeStyle.makeGroupText}>progress</Text>
              </View>
      </View>
      <View style={NewGroupThreeStyle.newGroupList}>
                  <View style={{  marginTop:30,alignItems:'center',flexDirection:'row',alignItems:'center'}}>                                            
                       <Image source={require("../../Image/gp2.png")} style={{width: 200, height:150, alignItems:'center',resizeMode: 'contain',}} />
                  </View>
                   </View>
         <View style={NewGroupThreeStyle.btncontainer}>
        <View style={NewGroupThreeStyle.buttonContainer}>
        <View  style={NewGroupThreeStyle.buttonStyle}>
          <View style={NewGroupThreeStyle.btnBox}>
        <View style={NewGroupThreeStyle.Imagecontainer}>
              <View style={NewGroupThreeStyle.buttonImageContainer}>
                <Button title="Button 1"/>
              </View>
              <View style={NewGroupThreeStyle.buttonImageContainer}>
                <Button title="Button 2"/>
              </View>
              <View style={NewGroupThreeStyle.buttonImageContainer}>
                <Button title="Button 2"/>
              </View>
            </View>
            </View>
                  
                  </View>
              </View>
              <View style={NewGroupThreeStyle.buttonContainerSecond}>
                <View  style={NewGroupThreeStyle.buttonStyle}>
              
                  </View>
              </View>
              </View>
              <View style={NewGroupThreeStyle.btncontainer}>
        <View style={NewGroupThreeStyle.buttonContainer}>
        <View  style={NewGroupThreeStyle.buttonStyle}>
                  
                  </View>
              </View>
              <View style={NewGroupThreeStyle.buttonContainerSecond}>
                <View  style={NewGroupThreeStyle.buttonStyle}>
              
                  </View>
              </View>
              </View>
              <View style={NewGroupThreeStyle.btncontainer}>
        <View style={NewGroupThreeStyle.buttonContainer}>
        <View  style={NewGroupThreeStyle.buttonStyle}>
                  
                  </View>
              </View>
              <View style={NewGroupThreeStyle.buttonContainerSecond}>
                <View  style={NewGroupThreeStyle.buttonStyle}>
              
                  </View>
              </View>
              </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
