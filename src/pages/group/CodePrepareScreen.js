import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import CodePrepareStyle from './CodePrepareStyle';
import {FooterComponentWithTeacher,} from "../../component/AllComponent";



export default class CodePrepareScreen extends React.Component {
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
    this.props.navigation.navigate("MultipleStudentScreenStack");
  }
  createADAM(){
    this.props.navigation.navigate("MultipleStudentScreenStack");

  }

  render() {
      return (
      
    <View style={[CodePrepareStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={CodePrepareStyle.container}>
      <View style={[CodePrepareStyle.menuArea2]}>
   

    <View style={CodePrepareStyle.newStudentText}>
              <Text  style={CodePrepareStyle.makeGroupText}>prepare student code</Text>
              </View>
        </View>
      <View style={CodePrepareStyle.btnTextContainer}>

        <View  style={CodePrepareStyle.buttonStyle}>
                  <Text style={CodePrepareStyle.newStudentNextTxt}>Nick Name</Text>
                  </View>
                 
                 {/* <View style={StudentCodeStyle.studentCodeContainer}>
               <View  style={StudentCodeStyle.buttonStyle}>
                  <Text style={StudentCodeStyle.studentCodeTxt}>ADAM</Text>
                  </View>
              </View> */}
                <View style={CodePrepareStyle.createContainer}>
               <View  style={CodePrepareStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.createADAM();
              }} >
                  <Text style={CodePrepareStyle.studentCodeTxt}>ADAM</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
              </View>
              <View style={CodePrepareStyle.createStuContainer}>
              <Text  style={CodePrepareStyle.studenttitleCreate}>create a multiple student</Text>
              </View>

              <View style={CodePrepareStyle.createContainer}>
               <View  style={CodePrepareStyle.buttonStyle}>
               <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groups();
              }} >
                  <Text style={CodePrepareStyle.studentCodeTxt}>Create</Text>
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
