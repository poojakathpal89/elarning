import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
// import  MakeGroupStyle  from '../makegroups/MakeGroupStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
// import MakeGroupStyle from '../makegroups/MakeGroupStyle';
import CreateGroupScreenStyle from './CreateGroupScreenStyle';
import {FooterComponentWithTeacher} from "../../component/AllComponent";



export default class CreateGroupsScreen extends React.Component {
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
  createNewGroupBtn() {
    this.props.navigation.navigate("MultipleGroup");
   }

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={CreateGroupScreenStyle.container}>
      <View style={[CreateGroupScreenStyle.menuArea2]}>
   

    <View style={CreateGroupScreenStyle.newStudentText}>
              <Text  style={CreateGroupScreenStyle.makeGroupText}>easily create your own group</Text>
             
                  </View>
     

    

        </View>
      <View style={CreateGroupScreenStyle.btnTextContainer}>
      <View style={CreateGroupScreenStyle.btncontainer}>
        <View style={CreateGroupScreenStyle.buttonContainer}>
        <View  style={CreateGroupScreenStyle.buttonStyle}>
        <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.createNewGroupBtn();
              }} >
          <Text style={CreateGroupScreenStyle.newStudentNextTxt}>+ New Group</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                
                  </View>
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
