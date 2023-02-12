import React from 'react';
import { Text,Button, View ,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RegisterStyle from './RegisterStyle';
import CommonStyle from '../../css/common';


export default class RegisterScreen extends React.Component {
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
  goToNewStudentName() {
       this.props.navigation.navigate("newStudentName");
     
  }
  goToStudentCode() {
    alert("Welcome to test")
    this.props.navigation.navigate("newStudentCodeName");
  
}
goToNewTeacher(){
  this.props.navigation.navigate("newTeacherName");
}
  goToTeacherCode() {
    this.props.navigation.navigate("subscription");
   
}





  render() {
    // const goToStudentCode = () => {
    //   this.props.navigation.navigate("newStudentCodeName");
    
    // };
      return (
        <View style={CommonStyle.authArea}>
 <ScrollView>
            <View style={CommonStyle.logoOnlyHeader}>
                            <Image
                                source={require("../../Image/logo-icon.png")}
                                style={{
                                    width: 350,
                                    height: 100,
                                    resizeMode: "contain",
                                    }}
                                />
                        </View>
        
        <View style={RegisterStyle.BtnArea}>

        <View style={RegisterStyle.studentBtnArea }>
          <TouchableOpacity
            // disabled={this.state.loading}
            style={[RegisterStyle.comnButtonStyle,RegisterStyle.loginbtn]}
            activeOpacity={0.5}
            onPress={() => {
             this.goToNewStudentName();
            }}
          >
            <Text style={[RegisterStyle.loginbtnTxt,RegisterStyle.commonBtnTxt]}>
            {/* {GlobalService.Login ? GlobalService.Login.RAPP_LOGIN : 'Log in'} */}
             new student
            </Text>
            {/* {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null} */}
          </TouchableOpacity>
        </View>
        <View style={RegisterStyle.studentBtnArea }>
        <TextInput style = {RegisterStyle.input}
               underlineColorAndroid = "transparent"
               placeholder = "STUDENT CODE"
               placeholderTextColor = "black"
               textAlign='center'
               autoCapitalize = "none"
               keyboardType="numeric"
               onSubmitEditing={() =>{this.props.navigation.navigate("newStudentCodeName");}}/>
              
        </View>

      


        <View style={RegisterStyle.teacherBtnArea }>
        <TouchableOpacity
        style={[RegisterStyle.comnButtonStyle,RegisterStyle.loginbtn]}
        activeOpacity={0.5}
        onPress={() => {
         this.goToNewTeacher();
        }}
        >
    
        <Text style={[RegisterStyle.signupBtnTxt,RegisterStyle.commonBtnTxt]}> new teacher </Text>
        </TouchableOpacity>
        </View>

        <View style={RegisterStyle.teacherBtnArea }>
        <TextInput style = {RegisterStyle.input}
               underlineColorAndroid = "transparent"
               placeholder = "TEACHER CODE"
               placeholderTextColor = "black"
               textAlign='center'
               keyboardType="numeric"
               autoCapitalize = "none"
               onSubmitEditing={() =>{this.props.navigation.navigate("subscription");}}/>
        </View>

    
      </View>
      </ScrollView>
      </View>
      );
  }
}