import React from 'react';
import { Text,Button, View ,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RegisterStyle from './RegisterStyle';
import CommonStyle from '../../css/common';
import GlobalStyle from "../../css/style";
import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";



export default class RegisterScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false,
      studentCode: false,
      teacherCode: "",
  }
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
  }
  goToNewStudentName() {
       this.props.navigation.navigate("newStudentName");
     
  }
  goToStudentCode() {
    this.setState({studentCodeError: ""});
    let error = false;

    if (this.state.studentCode == "") {
      this.setState({ studentCodeError: GlobalService.Register ? GlobalService.Register.RAPP_PHONE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :"Student Code is required" });
      error = true;
    }
  
       this.props.navigation.navigate("newStudentCodeName");
  
}
goToNewTeacher(){
  this.props.navigation.navigate("newTeacherName");
}
  goToTeacherCode() {
    this.setState({teacherCodeError:""});

      if (this.state.teacherCode == "") {
      this.setState({ teacherCodeError: GlobalService.Register ? GlobalService.Register.RAPP_PHONE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :"teacher Code is required" });
      error = true;
    }
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
             new student
            </Text>
            {/* {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null} */}
          </TouchableOpacity>
        </View>
                 
         <View style={RegisterStyle.studentBtnArea }>
         {/* {this.state.studentCodeError ?
                         
               
                   <View style={RegisterStyle.errorclass}>  
   </View>
           : null}             */}
            <View style={RegisterStyle.newTeacherError}>
                                    {this.state.studentCodeError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.studentCodeError}</Text>
                                    : null}
                            

        <View  style = {RegisterStyle.input}>
            <TextInput
           onChangeText={(studentCode) => {
               this.setState({ studentCode: studentCode });
               }}
               underlineColorAndroid = "transparent"
               placeholder={GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_ENTER_EMAIL : "STUDENT CODE"} 
               placeholderTextColor = "black"
               textAlign='center'
               autoCapitalize = "none"
               keyboardType="numeric"
               onSubmitEditing={() =>{this.goToStudentCode();

              //  onSubmitEditing={() =>{this.props.navigation.navigate("newStudentCodeName");
              }}
              
               />
              </View>
              </View>
            
                </View> 
               
                
      
 <View style={RegisterStyle.teacherBtnArea }>
        {/* <View style={RegisterStyle.studentError}>
                  {this.state.teacherCodeError ?
                  <Text style={GlobalStyle.errorclass}>{this.state.teacherCodeError}</Text>
                  : null}
                                </View> */}
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
        <View style={RegisterStyle.newTeacherError}>
                                    {this.state.studentCodeError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.studentCodeError}</Text>
                                    : null}
       
          <View style = {RegisterStyle.input}>
        <TextInput 
               underlineColorAndroid = "transparent"
               placeholder = "TEACHER CODE"
               placeholderTextColor = "black"
               textAlign='center'
               keyboardType="numeric"
               autoCapitalize = "none"
               onSubmitEditing={() =>{this.goToTeacherCode()}}/>
               </View>
               </View>
        </View>

      </View>
      </ScrollView>
      </View>
      );
  }
}