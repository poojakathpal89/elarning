import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import GroupStudentStyle from './GroupStudentStyle';
import {  FooterComponentWithTeacher } from "../../component/AllComponent";



export default class GroupStudentScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
  }
  student(){
    this.props.navigation.navigate("StudentDetailScreen");
  }

  render() {
      return (
      
    <View style={[GroupStudentStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={GroupStudentStyle.container}>
      <View style={[GroupStudentStyle.menuArea2]}>
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginTop:20}}>X</Text>
</View>


    <View style={GroupStudentStyle.newStudentText}>
              <Text  style={GroupStudentStyle.makeGroupText}>GROUP 1</Text>
             
                  </View>
     

    

        </View>
      <View style={GroupStudentStyle.btnTextContainer}>

        <View  style={GroupStudentStyle.newStudentContainer}>
        <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Text style={GroupStudentStyle.newStudentTitle}>Students</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  </View>
                 <View style={GroupStudentStyle.ListHead}>
              <View style={GroupStudentStyle.newGroupList}>
                  <View style={{  width:36,height:36,borderRadius:18,  marginTop:10,alignItems:'center',justifyContent:'center',}}>                                            
                       {/* <Image source={{ uri: item.icon }} style={{width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10}}  />  */}
                       <Image source={require("../../Image/gp1.png")} style={{width: 80, height:60, resizeMode: 'contain',borderRadius:10}} />
                  </View>
                  <Text style={[GroupStudentStyle.gpStuName, { fontWeight:'700', fontSize:30,color: "#000000",opacity:1 }]}>name</Text>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Image source={require("../../Image/arrow.png")} style={{width: 20, height:20, resizeMode: 'contain',borderRadius:10}} />
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>

              </View>

                 
              <View style={GroupStudentStyle.newGroupList}>
                  <View style={{  width:36,height:36,borderRadius:18, marginTop:10,alignItems:'center',justifyContent:'center',}}>                                            
                       {/* <Image source={{ uri: item.icon }} style={{width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10}}  />  */}
                       <Image source={require("../../Image/gp2.png")} style={{width: 80, height:60, resizeMode: 'contain',borderRadius:10}} />
                  </View>
                  <Text style={[GroupStudentStyle.gpStuName, { fontWeight:'700', fontSize:30,color: "#000000",opacity:1 }]}>name</Text>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Image source={require("../../Image/arrow.png")} style={{width: 20, height:20, resizeMode: 'contain',borderRadius:10}} />
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
              </View>
               
              <View style={GroupStudentStyle.newGroupList}>
                  <View style={{  width:36,height:36,borderRadius:18,alignItems:'center',justifyContent:'center',}}>                                            
                       {/* <Image source={{ uri: item.icon }} style={{width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10}}  />  */}
                       <Image source={require("../../Image/gp3.png")} style={{width: 80, height:60, resizeMode: 'contain',borderRadius:10}} />
                  </View>
                  <Text style={[GroupStudentStyle.gpStuName, { fontWeight:'700', fontSize:30,color: "#000000",opacity:1 }]}>name</Text>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Image source={require("../../Image/arrow.png")} style={{width: 20, height:20, resizeMode: 'contain',borderRadius:10}} />
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
              </View>
              <View style={GroupStudentStyle.newGroupList}>
                  <View style={{  width:36,height:36,borderRadius:18,alignItems:'center',justifyContent:'center',}}>                                            
                       {/* <Image source={{ uri: item.icon }} style={{width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10}}  />  */}
                       <Image source={require("../../Image/gp4.png")} style={{width: 80, height:60, resizeMode: 'contain',borderRadius:10}} />
                  </View>
                  <Text style={[GroupStudentStyle.gpStuName, { fontWeight:'700', fontSize:30,color: "#000000",opacity:1 }]}>name</Text>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Image source={require("../../Image/arrow.png")} style={{width: 20, height:20, resizeMode: 'contain',borderRadius:10}} />
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
              </View>
              <View style={GroupStudentStyle.newGroupList}>
                  <View style={{  width:36,height:36,borderRadius:18,alignItems:'center',justifyContent:'center',}}>                                            
                       {/* <Image source={{ uri: item.icon }} style={{width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10}}  />  */}
                       <Image source={require("../../Image/gp5.png")} style={{width: 80, height:60, resizeMode: 'contain',borderRadius:10}} />
                  </View>
                  <Text style={[GroupStudentStyle.gpStuName, { fontWeight:'700', fontSize:30,color: "#000000",opacity:1 }]}>name</Text>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.student();
              }} >
                  <Image source={require("../../Image/arrow.png")} style={{width: 20, height:20, resizeMode: 'contain',borderRadius:10}} />
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
