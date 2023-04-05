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
      // console.log(StringsOfLanguages.languageObj);
      this.getGradeList();
  }
  gradeOneBtn(gradeId){
    GlobalService.regData.gradeId=gradeId
    this.props.navigation.navigate("Subjects");
    //subeject
  
  }
  
  getGradeList() {

    this.setState({ isLoading: true, gradeListArray:[] });
   
  
    AuthService.getStudentGradeList()
        .then((response) => {
          
        
            this.setState({ gradeListArray: response.grades});
            console.log(gradeListArray,"gradeListArray")
      
            //this.getAvtar(this.state.selectedCountry);
        })
        .catch((error) => {
            ToastService.tostShort(error);
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
                {/* {this.state.gradeListArray != "" &&
                                                            this.state.gradeListArray.length > 0 &&
                                                            this.state.gradeListArray.map((item, key) => ( */}
              
                    <View style={NewStudentthreeStyle.btncontainer}>
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
                                        <Text style={NewStudentthreeStyle.newStudentNextTxt}>Sanskarit</Text>

                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
  {/* ))} */}
                </View>
            </View>
        

        </ScrollView>
    
      </View>

      );
  }
}
