import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import StudentDetailStyle from './StudentDetailStyle';
import {  FooterComponentWithTeacher } from "../../component/AllComponent";



export default class StudentDetailScreen extends React.Component {
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
  progress(){
    this.props.navigation.navigate("StudentProgressScreen");
  }


  render() {
      return (
      
    <View style={[StudentDetailStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
     
      <ScrollView>
      <View style={StudentDetailStyle.container}>
      <View style={[StudentDetailStyle.menuArea2]}>
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginTop:10}}>X</Text>
</View>


              <Text  style={StudentDetailStyle.makeGroupText}>GROUP 1</Text>
             
        </View>
      <View style={StudentDetailStyle.btnTextContainer}>

        <View  style={StudentDetailStyle.newStudentContainer}>
                  <Text style={StudentDetailStyle.newStudentTitle}>Students</Text>
                  </View>
                 <View style={StudentDetailStyle .ListHead}>
              <View style={StudentDetailStyle.newGroupList}>
                  <View style={{  width:100,height:36, marginTop:10,alignItems:'center',flexDirection:'row',alignItems:'center'}}>                                            
                       <Image source={require("../../Image/gp2.png")} style={{width: 100, height:100, resizeMode: 'contain',}} />
                  </View>
                   </View>
               </View> 
          
      </View>

      <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>
<Text  style={StudentDetailStyle.gpName}>Nickname</Text>
<Text style={StudentDetailStyle.gpName}>name</Text>
  </View>
  </View>

  <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>
<Text  style={StudentDetailStyle.gpName}>Login code</Text>
<Text style={StudentDetailStyle.gpName}>ABC -125</Text>
  </View>
  </View>

  <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',}}>


<Text  style={StudentDetailStyle.gpName}>progress</Text>

<TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.progress();
              }} >
<Image source={require("../../Image/arrow.png")} style={{width: 20, height:20,alignItems:'center',justifyContent:'center', resizeMode: 'contain',borderRadius:10,marginEnd:60}} />
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
  </View>
  </View>
  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.delete();
              }} >
  <Text  style={StudentDetailStyle.deleteTxt}>Delete</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>

        </View>
       
 </ScrollView>
 <FooterComponentWithTeacher props={this.props} active={"home"} /> 
      </View>

      );
  }
}
