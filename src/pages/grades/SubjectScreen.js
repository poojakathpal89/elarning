import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
// import ListOfGradeStyle from './ListOfGradeStyle';
import SubjectStyle from './SubjectStyle';
import { AuthService,GlobalService,ToastService} from "../../services/AllServices";
import {FooterComponentWithTeacher, StudentFooterComponent} from "../../component/AllComponent";



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

    console.log("Subjects",GlobalService.userData)
    this.getSubjectList();
  }
  selectGrade(subjectId) {
    GlobalService.userData.subjectId=subjectId
    this.props.navigation.navigate("LessonScreenStack", {
      screen: "LessonScreens",
  });
   
}

getSubjectList() {

  this.setState({ isLoading: true, subjectListArray: [] });
  let postData = {
    gradeId: GlobalService.userData.user_grade_id,
   
};

  AuthService.getSubjectList(postData)
      .then((response) => {
       
      
          this.setState({ subjectListArray: response.subjects});
       
    
      })
      .catch((error) => {
        //  ToastService.tostShort(error);
      });
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
     
      <ScrollView>
      <View style={SubjectStyle.container}>
                
      <View style={SubjectStyle.btnTextContainer}>

       {this.state.subjectListArray != "" &&
      this.state.subjectListArray.length > 0 &&
      this.state.subjectListArray.map((item, key) => ( 

      <View key={key}  style={SubjectStyle.buttonContainerOne}>
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
      {GlobalService.userData.user_type==1 ?  <StudentFooterComponent props={this.props} active={"home"} /> :  <FooterComponentWithTeacher props={this.props} active={"home"} /> }

      </View>

      );
  }
}