import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import NewGroupTwoStyle from './NewGroupTwoStyle';
import {  FooterComponentWithTeacher } from "../../component/AllComponent";



export default class NewGroupTwoScreen extends React.Component {
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
  delete(){
    this.props.navigation.navigate("newGroupThree");
  }


  render() {
      return (
      
    <View style={[NewGroupTwoStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
     
      <ScrollView>
      <View style={NewGroupTwoStyle.container}>
      <View style={[NewGroupTwoStyle.menuArea2]}>
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginTop:10}}>X</Text>
</View>


              <Text  style={NewGroupTwoStyle.makeGroupText}>Group1</Text>
             
        </View>
      <View style={NewGroupTwoStyle.btnTextContainer}>

        <View  style={NewGroupTwoStyle.newStudentContainer}>
                  <Text style={NewGroupTwoStyle.newStudentTitle}>Students</Text>
                  </View>
                 <View style={NewGroupTwoStyle .ListHead}>
              <View style={NewGroupTwoStyle.newGroupList}>
                  <View style={{  width:100,height:36, marginTop:10,alignItems:'center',flexDirection:'row',alignItems:'center'}}>                                            
                       <Image source={require("../../Image/gp2.png")} style={{width: 100, height:100, resizeMode: 'contain',}} />
                  </View>
                   </View>
               </View> 
          
      </View>

      <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>
<Text  style={NewGroupTwoStyle.gpName}>NickName</Text>
<Text style={NewGroupTwoStyle.gpName}>name</Text>
  </View>
  </View>

  <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>
<Text  style={NewGroupTwoStyle.gpName}>Login Code</Text>
<Text style={NewGroupTwoStyle.gpName}>ABC -125</Text>
  </View>
  </View>

  <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>
<Text  style={NewGroupTwoStyle.gpName}>progress</Text>
<Image source={require("../../Image/arrow.png")} style={{width: 20, height:20,alignItems:'center',justifyContent:'center', resizeMode: 'contain',borderRadius:10,marginEnd:60}} />
  </View>
  </View>
  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.delete();
              }} >
  <Text  style={NewGroupTwoStyle.deleteTxt}>Delete</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>

        </View>
       
 </ScrollView>
 <FooterComponentWithTeacher props={this.props} active={"home"} /> 
      </View>

      );
  }
}
