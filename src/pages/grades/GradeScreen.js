import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import  NewStudentthreeStyle  from '../newStudent3/NewStudentthreeStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import { AuthService,GlobalService,ToastService} from "../../services/AllServices";


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

    GlobalService.regData.gradeId=gradeId
    this.userRegisterData();
  
  }
  userRegisterData (){
   
    AuthService.registerUser(GlobalService.regData)
    .then((res) => {
   
        this.setState({ isLoading: false });
    
        if (res.status == 1) {
          GlobalService.userData = GlobalService.regData ;
          GlobalService.regData = "";
          GlobalService.regData.loginCode=res.userCode
        
          this.props.navigation.navigate("CodeScreen");
            
        } else {
        
            ToastService.tostLong(res.msg);
        }
    })
    .catch((error) => {
        ToastService.tostShort(error);
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
                            <View style={NewStudentthreeStyle.buttonContainer}>
                                <View  style={NewStudentthreeStyle.buttonStyle}>
                                    <TouchableOpacity
                                      disabled={this.state.loading}
                                                                    
                                        activeOpacity={0.5}
                                        onPress={() => {
                                          this.gradeOneBtn(item.id);
                                         // this.gradeOneBtn();
                                        }} >
                                        {/* <Text style={NewStudentthreeStyle.newStudentNextTxt}>{item.name}</Text> */}
                                        <Text style={NewStudentthreeStyle.newStudentNextTxt}>{item.name}</Text>

                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
   ))} 
                </View>
            </View>
        

        </ScrollView>

      </View>

      );
  }
}

