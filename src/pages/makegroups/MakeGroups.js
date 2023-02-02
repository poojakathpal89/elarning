import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
// import  MakeGroupStyle  from '../makegroups/MakeGroupStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import MakeGroupStyle from '../makegroups/MakeGroupStyle';


export default class MakeGroups extends React.Component {
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
  newBtn() {
    this.props.navigation.navigate("groupOne");
   }

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={MakeGroupStyle.container}>
      <View style={[MakeGroupStyle.menuArea2]}>
   

    <View style={MakeGroupStyle.newStudentText}>
              <Text  style={MakeGroupStyle.makeGroupText}>easily create your own group</Text>
             
                  </View>
     

    

        </View>
      <View style={MakeGroupStyle.btnTextContainer}>
      <View style={MakeGroupStyle.btncontainer}>
        <View style={MakeGroupStyle.buttonContainer}>
        <View  style={MakeGroupStyle.buttonStyle}>
        <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.newBtn();
              }} >
          <Text style={MakeGroupStyle.newStudentNextTxt}>+ New Group</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                
                  </View>
              </View>
             
              </View>
          
      </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
