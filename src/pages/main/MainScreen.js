import React from 'react';
import { Text,Button, View ,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainStyle from './MainStyle';
import CommonStyle from '../../css/common';
import GlobalStyle from "../../css/style";
import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";



export default class MainScreen extends React.Component {
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
       this.props.navigation.navigate("RegisterStudent");
     
  }
  goToStudentCode() {
    this.setState({studentCodeError: ""});
    let error = false;

    if (this.state.studentCode == "") {
      this.setState({ studentCodeError: GlobalService.Register ? GlobalService.Register.RAPP_PHONE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :"Student Code is required" });
      error = true;
    }
  if (error== false){
    this.props.navigation.navigate("NewStudentCodeName");

  }
  
}
 
goToNewTeacher(){
  this.props.navigation.navigate("RegisterTeacher");
}

  goToTeacherCode() {
    this.setState({teacherCodeError:""});
    let error = false;

      if (this.state.teacherCode == "") {
      this.setState({ teacherCodeError: GlobalService.Register ? GlobalService.Register.RAPP_PHONE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :"teacher Code is required" });
      error = true;
    }
    if (error== false){
      this.props.navigation.navigate("Subscription");
      // this.props.navigation.navigate("Subscription");
  
    }
   
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
        
        <View style={MainStyle.BtnArea}>

        <View style={MainStyle.studentBtnArea }>
          <TouchableOpacity
            // disabled={this.state.loading}
            style={[MainStyle.comnButtonStyle,MainStyle.loginbtn]}
            activeOpacity={0.5}
            onPress={() => {
             this.goToNewStudentName();
            }}
          >
            <Text style={[MainStyle.loginbtnTxt,MainStyle.commonBtnTxt]}>
             new student
            </Text>
            {/* {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null} */}
          </TouchableOpacity>
        </View>
                 
       
         <View style={MainStyle.studentBtnArea  }>
      
         <View  style = {[MainStyle.comnButtonStyle,MainStyle.loginbtn]}>
            <TextInput
           onChangeText={(studentCode) => {
               this.setState({ studentCode: studentCode });
               }}
               underlineColorAndroid = "transparent"
               placeholder={GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_ENTER_EMAIL : "STUDENT CODE"} 
               placeholderTextColor = "black"
               textAlign='center'
               autoCapitalize = "none"
               keyboardType="alphanumeric"
               onSubmitEditing={() =>{this.goToStudentCode();

              //  onSubmitEditing={() =>{this.props.navigation.navigate("newStudentCodeName");
              }}
              />
              </View>
            
            
                </View> 
               
                
      
 <View style={MainStyle.teacherBtnArea }>
       
        <TouchableOpacity
        style={[MainStyle.comnButtonStyle,MainStyle.loginbtn]}
        activeOpacity={0.5}
        onPress={() => {
         this.goToNewTeacher();
        }}
        >
    
        <Text style={[MainStyle.signupBtnTxt,MainStyle.commonBtnTxt]}> new teacher </Text>
        </TouchableOpacity>
        </View>

<View style={MainStyle.studentBtnArea  }>
      
      <View  style = {[MainStyle.comnButtonStyle,MainStyle.loginbtn]}>
         <TextInput
        onChangeText={(teacherCode) => {
            this.setState({ teacherCode: teacherCode });
            }}
            underlineColorAndroid = "transparent"
            placeholder={GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_ENTER_EMAIL : "TEACHER CODE"} 
            placeholderTextColor = "black"
            textAlign='center'
            autoCapitalize = "none"
            keyboardType="alphanumeric"
            onSubmitEditing={() =>{this.goToTeacherCode();

           //  onSubmitEditing={() =>{this.props.navigation.navigate("newStudentCodeName");
           }}
           />
           </View>
         
         
             </View> 
        </View>

      
      </ScrollView>
      </View>
      );
  }
}