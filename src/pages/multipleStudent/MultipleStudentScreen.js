import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import MultipleStudentStyle from './MultipleStudentStyle';


export default class MultipleStudentScreen extends React.Component {
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

  createGroups(){
    this.props.navigation.navigate("newGroupOne");
  }
  render() {
      return (
      
    <View style={[MultipleStudentStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={MultipleStudentStyle.container}>
      <View style={[MultipleStudentStyle.menuArea2]}>
      <View style={MultipleStudentStyle.prepCodeAdmContainer}>
              <Text  style={MultipleStudentStyle.admText}>you have sussefuly prepared a code for ADAM</Text>
              </View>

    <View style={MultipleStudentStyle.newStudentText}>
              <Text  style={MultipleStudentStyle.makeGroupText}>prepare student code</Text>
              </View>
        </View>
      <View style={MultipleStudentStyle.btnTextContainer}>

        <View  style={MultipleStudentStyle.buttonStyle}>
                  <Text style={MultipleStudentStyle.newStudentNextTxt}>Nick Name</Text>
                  </View>
                 
                 <View style={MultipleStudentStyle.studentCodeContainer}>
               <View  style={MultipleStudentStyle.buttonStyle}>
                  <Text style={MultipleStudentStyle.studentCodeTxt}>ADAM</Text>
                  </View>
              </View>
              <View style={MultipleStudentStyle.createStuContainer}>
              <Text  style={MultipleStudentStyle.studenttitleCreate}>create a multiple student</Text>
              </View>

              <View style={MultipleStudentStyle.createContainer}>
               <View  style={MultipleStudentStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.createGroups();
              }} >
                  <Text style={MultipleStudentStyle.studentCodeTxt}>Create</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
              </View>
      </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
