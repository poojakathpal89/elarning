import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import  NewStudentthreeStyle  from '../newStudent3/NewStudentthreeStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import { AuthService,GlobalService,RequestHandler,ToastService} from "../../services/AllServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class GradeScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false,
      gradeListArray:[],
      
  };

  componentDidMount() {
      this.getGradeList();
      
  }
  gradeOneBtn(gradeId){

    GlobalService.regData.user_grade_id=gradeId
    this.userRegisterData();
  
  }
  userRegisterData (){
   
    
    AuthService.registerUser(GlobalService.regData)
    .then((res) => {
   
        this.setState({ isLoading: false });
    
        if (res.status == 1) {

       
          GlobalService.userData = GlobalService.regData ;
         // GlobalService.regData = "";
          GlobalService.userData.loginCode=res.userCode;
          let postData ={
            password:res.userCode,
            user_type: GlobalService.userData.user_type
          }
          AuthService.authenticate(postData)
          .then((res) => {
         
          
              this.setState({ isLoading: false });
        
              if (res.status == 1) {
               let i = parseInt(res.userInfo.user_type);
                GlobalService.userData=res.userInfo;
                let data =  RequestHandler.state.userSessions;
             
                data.push(res.userInfo)
              
                AsyncStorage.multiSet(
                  [
                      ["token",res.userInfo.token],
                      ["userSession",  JSON.stringify(data)],
                     
                  ],
                  async (error) => {
                    
                  }
              );
              
                
               
                  
              } else {
              
                   ToastService.tostLong(res.msg);
              }
          })
          .catch((error) => {
              // ToastService.tostShort(error);
          });
          
        this.props.navigation.navigate("CodeScreen");






      console.log("all Set")







          
            
        } else {
        
             ToastService.tostLong(res.msg);
        }
    })
    .catch((error) => {
        // ToastService.tostShort(error);
    });
  }
  
  getGradeList() {

    this.setState({ isLoading: true, gradeListArray:[] });
   
  
    AuthService.getStudentGradeList()
        .then((response) => {
          console.log(response)
        
            this.setState({ gradeListArray: response.grades});
        })
        .catch((error) => {
            // ToastService.tostShort(error);
        });
}


  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
        <ScrollView>
            <View style={NewStudentthreeStyle.container}>
                <View style={[NewStudentthreeStyle.menuArea2]}>
            
                      <View style={CommonStyle.logoOnlyHeader}>
                          <Image
                              source={require("../../Image/logo-icon.png")}
                              style={{
                                  width: 350,
                                  height: 70,
                                  resizeMode: "contain",
                                  }}
                              />
                      </View>
                  </View>
                <View style={NewStudentthreeStyle.btnTextContainer}>
               {this.state.gradeListArray != "" &&
                                                            this.state.gradeListArray.length > 0 &&
                                                            this.state.gradeListArray.map((item, key) => ( 
              
                    <View key={key} style={NewStudentthreeStyle.btncontainer}>
                            
                                    <TouchableOpacity
                                      disabled={this.state.loading}
                                                                    
                                        activeOpacity={0.5}
                                        onPress={() => {
                                          this.gradeOneBtn(item.id);
                                         // this.gradeOneBtn();
                                        }} >
                                          <View style={NewStudentthreeStyle.buttonContainer}>
                                <View  style={NewStudentthreeStyle.buttonStyle}>
                                        {/* <Text style={NewStudentthreeStyle.newStudentNextTxt}>{item.name}</Text> */}
                                        <Text style={NewStudentthreeStyle.newStudentNextTxt}>{item.name}</Text>

                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                   
                                    </View>
                    </View>
                                   
                                    </TouchableOpacity>
                                </View>
                           
   ))} 
                </View>
            </View>
        

        </ScrollView>

      </View>

      );
  }
}

