import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import AlphabetCarStyle from './AlphaBetCarStyle';
import { HeaderWithTextComponent } from "../../component/AllComponent";



export default class AlphaBetCarScreen extends React.Component {
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
  gradeFourBtn() {
    this.props.navigation.navigate("teacherName");
   
}
gradeThreeBtn() {
  this.props.navigation.navigate("newStudentName");
 
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
     <HeaderWithTextComponent props={this.props} />
      <ScrollView>
      <View style={AlphabetCarStyle.container}>
      
        
      <View style={{justifyContent: 'space-between'}}>
   <Text style={{alignSelf: 'flex-end',fontSize:20,}}>X</Text>
</View>

<View style={AlphabetCarStyle.mainContainerPin}>
<Text style={{alignSelf: 'flex-end',fontSize:20,}}>X</Text>
</View>
     
      <View style={AlphabetCarStyle.buttonContainerOne}>
            <View  style={AlphabetCarStyle.pinbuttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>pin in</Text>
                  </View>
                  <View style={AlphabetCarStyle.groupButtonStyle}>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 1</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 2</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 3</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 4</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 5</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 1</Text>
                  </View>
                  <View  style={AlphabetCarStyle.buttonStyle}>
                  <Text style={AlphabetCarStyle.newStudentNextTxt}>GROUP 6</Text>
                  </View>
                  </View>
              </View>

        </View>   

       </ScrollView>
   
      </View>

      );
  }
}