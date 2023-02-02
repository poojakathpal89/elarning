import React from 'react';
import { Text,Button, View ,TextInput,Image,TouchableOpacity} from 'react-native';
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
    this.props.navigation.navigate("newStudentCodeName");
  
}
goToNewTeacher(){
  this.props.navigation.navigate("newTeacherName");
}
  goToTeacher() {
   // this.props.navigation.navigate("TeacherScreen");
   
}


  render() {
      return (
        <View style={CommonStyle.authArea}>

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
          <TouchableOpacity
            // disabled={this.state.loading}
            style={[RegisterStyle.comnButtonStyle,RegisterStyle.loginbtn]}
            activeOpacity={0.5}
            onPress={() => {
             this.goToStudentCode();
            }}
          >
            <Text style={[RegisterStyle.loginbtnTxt,RegisterStyle.commonBtnTxt]}>
            {/* {GlobalService.Login ? GlobalService.Login.RAPP_LOGIN : 'Log in'} */}
            STUDENT CODE
            </Text>
            {/* {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null} */}
          </TouchableOpacity>
        </View>

        {/* <TextInput style = {RegisterStyle.input}
               underlineColorAndroid = "transparent"
               placeholder = "STUDENT CODE"
               placeholderTextColor = "black"
               textAlign='center'
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/> */}


        <View style={RegisterStyle.teacherBtnArea }>
        <TouchableOpacity
        // disabled={this.state.loading}
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
        <TouchableOpacity
        // disabled={this.state.loading}
        style={[RegisterStyle.comnButtonStyle,RegisterStyle.loginbtn]}
        activeOpacity={0.5}
        onPress={() => {
         this.goToNewTeacher();
        }}
        >
    
        <Text style={[RegisterStyle.signupBtnTxt,RegisterStyle.commonBtnTxt]}>TEACHER CODE </Text>
        </TouchableOpacity>
        </View>

    
      </View>
      </View>
      );
  }
}