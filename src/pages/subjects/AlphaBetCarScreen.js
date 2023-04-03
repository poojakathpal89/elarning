import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import AlphabetCarStyle from './AlphaBetCarStyle';
import { HeaderWithTextComponent,FooterComponentWithTeacher } from "../../component/AllComponent";



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
   <Text style={{alignSelf: 'flex-end',fontSize:20,marginBottom:20}}>X</Text>
</View>

<View style={AlphabetCarStyle.MainContainerBox}>


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
             
              <View style={AlphabetCarStyle.buttonBox}>
            <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>أ</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ب</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ت</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ث</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ا ب ت</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ج</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ح</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>خ</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ج ح خ</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>د</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ذ</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ث</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ث</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ر</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ز</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>د ذ ر ز </Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>س</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ش</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ص</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ض</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>س ش ص ض</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ط</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ظ</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>غ</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ط ظ ع غ</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ف</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ق</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ك</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}> ف ق ك</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ل</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>م</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}> ن</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}> ل م ن</Text>
                </View>
                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}> ھ</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}> ھ</Text>
                </View>
              

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>ى</Text>
                </View>

                <View style={AlphabetCarStyle.buttonContainerSecond}>
              <Text style={AlphabetCarStyle.buttonTextStyle}>كل الحروف</Text>
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