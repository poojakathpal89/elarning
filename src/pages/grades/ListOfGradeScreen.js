import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ListOfGradeStyle from './ListOfGradeStyle';


export default class ListOfGradeScreen extends React.Component {
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
  selectGrade() {
    this.props.navigation.navigate("praticlatter");
   
}
selectGrade() {
    this.props.navigation.navigate("praticlatter");
   
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={ListOfGradeStyle.container}>
                
      <View style={ListOfGradeStyle.btnTextContainer}>

      <View style={ListOfGradeStyle.buttonContainerOne}>
        <View  style={ListOfGradeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.selectGrade();
            }} >
                 <Text style={ListOfGradeStyle.newStudentNextTxt}>اللغه العربيه</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
                  </View>
              </View>

            
              </View>


              <View style={ListOfGradeStyle.btnTextContainer}>

      <View style={ListOfGradeStyle.buttonContainerOne}>
        <View  style={ListOfGradeStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.selectGrade();
            }} >
                 <Text style={ListOfGradeStyle.newStudentNextTxt}>الرياضيات</Text>
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