import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import StudentCodeStyle from './StudentCodeStyle';
import {FooterComponentWithTeacher,} from "../../component/AllComponent";



export default class StudentScreenCode extends React.Component {
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
      
    <View style={[StudentCodeStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={StudentCodeStyle.container}>
      <View style={[StudentCodeStyle.menuArea2]}>
   

    <View style={StudentCodeStyle.newStudentText}>
              <Text  style={StudentCodeStyle.makeGroupText}>prepare student code</Text>
              </View>
        </View>
      <View style={StudentCodeStyle.btnTextContainer}>

        <View  style={StudentCodeStyle.buttonStyle}>
                  <Text style={StudentCodeStyle.newStudentNextTxt}>Nick Name</Text>
                  </View>
                 
                 <View style={StudentCodeStyle.studentCodeContainer}>
               <View  style={StudentCodeStyle.buttonStyle}>
                  <Text style={StudentCodeStyle.studentCodeTxt}>ADAM</Text>
                  </View>
              </View>
              <View style={StudentCodeStyle.createStuContainer}>
              <Text  style={StudentCodeStyle.studenttitleCreate}>create a multiple student</Text>
              </View>

              <View style={StudentCodeStyle.createContainer}>
               <View  style={StudentCodeStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groups();
              }} >
                  <Text style={StudentCodeStyle.studentCodeTxt}>Create</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
              </View>
      </View>
        </View>
       
 </ScrollView>
 <FooterComponentWithTeacher props={this.props} active={"home"} /> 

      </View>

      );
  }
}
