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
groups(){
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

     
        {/* <View style={GroupOneStyle.btncontainer}>
        <View style={GroupOneStyle.buttonContainer}> */}
        <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 1</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 2</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 3</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 4</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 5</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 6</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 7</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 8</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <Text style={GroupOneStyle.newStudentNextTxt}>Group 9</Text>
                  </View>
                  <View  style={GroupOneStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.groups();
              }} >
        <Text style={GroupOneStyle.newStudentNextTxt}>Group 10</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                  
                  </View>
              {/* </View> */}
             
              {/* </View> */}
          
      </View>
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
