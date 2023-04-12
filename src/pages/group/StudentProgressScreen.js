import React from 'react';
import {Text,Image,TextInput, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import StudentProgressStyle from './StudentProgressStyle';
import { color } from 'react-native-reanimated';
import FooterComponentWithTeacher from '../../component/FooterComponentWithTeacher';


export default class StudentProgressScreen extends React.Component {
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
      
    <View style={[StudentProgressStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={StudentProgressStyle.container}>
      <View style={[StudentProgressStyle.menuArea2]}>
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginTop:20}}>X</Text>
</View>


    <View style={StudentProgressStyle.newStudentText}>
              <Text  style={StudentProgressStyle.makeGroupText}>progress</Text>
              </View>
      </View>
      <View style={StudentProgressStyle.newGroupList}>
                  <View style={{  marginTop:30,alignItems:'center',flexDirection:'row',alignItems:'center'}}>                                            
                       <Image source={require("../../Image/gp2.png")} style={{width: 200, height:150, alignItems:'center',resizeMode: 'contain',}} />
                  </View>
                   </View>
         <View style={StudentProgressStyle.btncontainer}>
        <View style={StudentProgressStyle.buttonContainer}>
     
            <View  style={{width:'100%',flexDirection:'row',}}>
              <View style={StudentProgressStyle.buttonContainerStyleOne}>
              </View>
              <View style={StudentProgressStyle.buttonContainerStyleTwo}>
              </View>
              <View style={StudentProgressStyle.buttonContainerStyleOne}>
              </View>
              <View style={StudentProgressStyle.buttonContainerStyleRightOne}>
              </View>
              <View style={StudentProgressStyle.buttonContainerStyleRighTwo}>
              </View>
             
                  
        </View>
        
     
     
     
     
     
      </View>
              <View style={StudentProgressStyle.buttonContainerSecond}>
              <Text style={StudentProgressStyle.buttonTextStyle}>أ</Text>

              </View>
              </View>

              <View style={StudentProgressStyle.btncontainer}>
        <View style={StudentProgressStyle.buttonContainer}>
        <View  style={StudentProgressStyle.buttonStyle}>
                  
                  </View>
              </View>
              <View style={StudentProgressStyle.buttonContainerSecond}>
              <Text style={StudentProgressStyle.buttonTextStyle}>ب</Text>
                <View  style={StudentProgressStyle.buttonStyle}>
              
                  </View>
              </View>
              </View>
              <View style={StudentProgressStyle.btncontainer}>
       <View style={StudentProgressStyle.buttonContainer}>
        <View  style={StudentProgressStyle.buttonStyle}>
                  
                  </View>
              </View>
              <View style={StudentProgressStyle.buttonContainerSecond}>
              <Text style={StudentProgressStyle.buttonTextStyle}>ت</Text>

                <View  style={StudentProgressStyle.buttonStyle}>
              
                  </View>
              </View>
              </View>
              <View style={StudentProgressStyle.btncontainer}>
        <View style={StudentProgressStyle.buttonContainer}>
        <View  style={StudentProgressStyle.buttonStyle}>
                  
                  </View>
              </View>
              <View style={StudentProgressStyle.buttonContainerSecond}>
              <Text style={StudentProgressStyle.buttonTextStyle}>ث</Text>
                </View>
              </View>
        </View>
       
 </ScrollView>
 <FooterComponentWithTeacher props={this.props} active={"home"} /> 

      </View>

      );
  }
}
