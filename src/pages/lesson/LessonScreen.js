import React from 'react';
import {Text,Image, View,Button,TouchableOpacity,ScrollView} from 'react-native';
import LessonStyle  from './LessonStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import { HeaderWithBackComponent } from "../../component/AllComponent";
import { AuthService,GlobalService,ToastService} from "../../services/AllServices";
import {StudentFooterComponent} from "../../component/AllComponent";




export default class LessonScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false,
      lessonListArray:[],
  };

  componentDidMount() {
    this.getLessonList();

  }
  oneBtn(id) {
    console.log("id",id);
     this.props.navigation.setParams({item:"DDDD"})
    this.props.navigation.navigate("LearnExerciseScreenStack",
    {screen:"LearnExcerciseScreen"});
   
   
}


getLessonList() {

  this.setState({ isLoading: true, lessonListArray: [] });
  let postData = {
    subjectId: GlobalService.userData.subjectId,
   
};

  AuthService.getLessonList(postData)
      .then((response) => {
        
      
          this.setState({ lessonListArray: response.lessons});
          console.log(lessonListArray,"lessonList")
    
      })
      .catch((error) => {
          // ToastService.tostShort(error);
      });
}

  render() {
      return (
      
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
           {/* <HeaderWithBackComponent props={this.props} /> */}

      <ScrollView>
      <View style={LessonStyle.container}>
      
      <View style={LessonStyle.btnTextContainer}>

     
              <View style={LessonStyle.btncontainer}>

              {this.state.lessonListArray != "" &&
      this.state.lessonListArray.length > 0 &&
      this.state.lessonListArray.map((item, key) => (

                  <View key={key} style={LessonStyle.buttonContainer}>
                  <View  style={LessonStyle.buttonStyle}>
                  <TouchableOpacity
                    disabled={this.state.loading}
                                                  
                      activeOpacity={0.5}
                      onPress={() => {
                        // this.oneBtn(item.id);
                        this.props.navigation.navigate("ListEcerciseScreenStack", {
                          screen: "ListExcerciseScreen",
                          params: { item: item },
                      });
                      }} >
                      <Text style={LessonStyle.newStudentNextTxt}>{item.name}</Text>
                      {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                        </TouchableOpacity>
                            </View>
                        </View>
                  ))}
                        </View>
           
      </View>
        </View>
       </ScrollView>
       <StudentFooterComponent props={this.props} active={"home"} /> 

      </View>

      );
  }
}