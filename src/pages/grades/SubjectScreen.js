import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
// import ListOfGradeStyle from './ListOfGradeStyle';
import SubjectStyle from './SubjectStyle';
import { AuthService,GlobalService,ToastService} from "../../services/AllServices";


export default class SubjectScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false,
      subjectListArray:[],
  };

  componentDidMount() {
    this.getSubjectList();
  }
  selectGrade() {
    this.props.navigation.navigate("Lesson");
   
}
selectGrade() {
    this.props.navigation.navigate("Lesson");
   
}
getSubjectList() {

  this.setState({ isLoading: true, subjectListArray: [] });
  let postData = {
    gradeId: GlobalService.regData.gradeId,
   
};

  AuthService.getSubjectList(postData)
      .then((response) => {
        
      
          this.setState({ subjectListArray: response.subjects});
          console.log(subjectListArray,"subjectlist")
    
      })
      .catch((error) => {
          ToastService.tostShort(error);
      });
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
      <ScrollView>
      <View style={SubjectStyle.container}>
                
      <View style={SubjectStyle.btnTextContainer}>

      {this.state.subjectListArray != "" &&
      this.state.subjectListArray.length > 0 &&
      this.state.subjectListArray.map((item, key) => (

      <View  key={key} style={SubjectStyle.buttonContainerOne}>
        <View  style={SubjectStyle.buttonStyle}>
        <TouchableOpacity
          disabled={this.state.loading}
                                        
            activeOpacity={0.5}
            onPress={() => {
              this.selectGrade(item.id);
            }} >
                 <Text style={SubjectStyle.newStudentNextTxt}>{item.name}</Text>
             {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
              </TouchableOpacity>
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