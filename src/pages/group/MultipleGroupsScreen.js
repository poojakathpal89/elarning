import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
// import GroupOneStyle from './MakeGroupOneStyle';
import MultilpeGroupStyle from './MultipleGroupsStyle';
import FooterComponentWithTeacher from '../../component/FooterComponentWithTeacher';


export default class MultipleGroupsScreen extends React.Component {
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
  this.props.navigation.navigate("GroupStudentScreen");
}


  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={MultilpeGroupStyle.container}>
      <View style={[MultilpeGroupStyle.menuArea2]}>
   

    <View style={MultilpeGroupStyle.newStudentText}>
              <Text  style={MultilpeGroupStyle.makeGroupText}>Groups</Text>
             
                  </View>
     

    

        </View>
      <View style={MultilpeGroupStyle.btnTextContainer}>

                 
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 1</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 2</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 3</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 4</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 5</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 6</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 7</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 8</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 9</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                  <View  style={MultilpeGroupStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groupsOne();
              }} >
        <Text style={MultilpeGroupStyle.newStudentNextTxt}>Group 10</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
                
                 
             </View>
        </View>
       
 </ScrollView>
 <FooterComponentWithTeacher props={this.props} active={"home"} /> 

      </View>

      );
  }
}
