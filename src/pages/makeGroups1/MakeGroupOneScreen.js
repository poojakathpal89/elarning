import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import GroupOneStyle from './MakeGroupOneStyle';


export default class GroupOne extends React.Component {
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
  groupsOne(){
  this.props.navigation.navigate("studentCode");
}
groupsTwo(){
  this.props.navigation.navigate("studentCode");
}
groupsThree(){
  this.props.navigation.navigate("studentCode");
}
groupsFour(){
  this.props.navigation.navigate("studentCode");
}
groupsFive(){
  this.props.navigation.navigate("studentCode");
}
groupsSix(){
  this.props.navigation.navigate("studentCode");
}
groupsSeven(){
  this.props.navigation.navigate("studentCode");
}
groupsEight(){
  this.props.navigation.navigate("studentCode");
}
groupsNine(){
  this.props.navigation.navigate("studentCode");
}
groupsTen(){
  this.props.navigation.navigate("studentCode");
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={GroupOneStyle.container}>
      <View style={[GroupOneStyle.menuArea2]}>
   

    <View style={GroupOneStyle.newStudentText}>
              <Text  style={GroupOneStyle.makeGroupText}>Groups</Text>
             
                  </View>
     

    

        </View>
      <View style={GroupOneStyle.btnTextContainer}>

                 
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 1</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsTwo();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 2</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsThree();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 3</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsFour();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 4</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsFive();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 5</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsSix();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 6</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsSeven();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 7</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsEight();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 8</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsNine();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 9</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsTen();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 10</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                
                 
             </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
