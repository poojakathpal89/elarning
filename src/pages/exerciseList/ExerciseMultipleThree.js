import React from 'react';
import {Text,Image,TouchableOpacity, View,Button,ScrollView} from 'react-native';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ExerciseTwoStyle from './ExerciseTwoStyle';
import ExerciseMultipleOneStyle from './ExerciseMultipleOneStyle';
import ExercisMultipleThreeStyle from './ExerciseMultipleThreeStyle';
import { AuthService } from "../../services/AllServices";
import { HeaderWithBackComponent } from "../../component/AllComponent";


const coloursArray = [
  "#3658C9",
 "#F1BEE0" ,
 "#F9D29C",
 "#5EDEF3",
 "#3EB881",
 "#FECB5A",
"#F1BEE0",
 "#FECB5A",
"#7DF1D4",
 "#C8E99F",
 "#A75DE5",
 "#3658C9",
 "#EE8C5F",
 "#A75DE5",
 "#F23E5F",
 "#FECB5A",
 "#F1BEE0",
 "#EE8C5F",
 "#EE8C5F",
 "#7DF1D4",
 "#3EB881",
 "#A75DE5",
 "#F1BEE0",
 "#7DF1D4",
 "#F1BEE0",
 "#FECB5A",
 "#5EDEF3",
 "#C8E99F",
 "#EE8C5F",
 "#FECB5A",
 "#EE8C5F",
  "#7DF1D4",
   "#F1BEE0",
   "#FECB5A",
   "#5EDEF3",
   "#5EDEF3",
   "#F1BEE0",
   "#F23E5F",
  "#EE8C5F",
   "#A75DE5",
   "#F1BEE0",
   "#F1BEE0",
   "#7DF1D4",
   "#FECB5A",
  "#C8E99F",
   "#3658C9",
   "#EE8C5F",
];

export default class ExerciseMultipleThree extends React.Component {
  constructor(props) {
      super(props);
      state = {
      avtarArray: [{"1":"../../Image/logo-icon.png"}],
      }
    };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
      this.getAvtar();
  }
  groups(){
    this.props.navigation.navigate("multipleStudent");
  }
  getAvtar() {
    this.setState({ avtarArray: [] });
    AuthService.getAvtar()
        .then((response) => {
             console.log(typeof response.avatar);
             console.log('response',response.avatars)
            if (response.status == 1) {
                this.setState({ avtarArray: response.avatars, isLoading: false });
                this.state.avtarArray;
            } else {
                // ToastService.tostShort(response.msg);
            }
        })
        .catch((error) => {
            // ToastService.tostShort(error);
        });
}
  render() {
      return (
      
    <View style={[ExercisMultipleThreeStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
       {/* <FooterComponent/> */}
       <HeaderWithBackComponent props={this.props} />


      <ScrollView>
      <View style={ExercisMultipleThreeStyle.container}>
     
      <View style={ExercisMultipleThreeStyle.btnTextContainer}>
      <View style={ExercisMultipleThreeStyle.toplayoutContainer}>
        <View style={ExercisMultipleThreeStyle.multipleTopCodeContainer}>
               <View  style={ExercisMultipleThreeStyle.buttonStyle}>
                  <Text style={ExercisMultipleThreeStyle.studentCodeTxt}></Text>
             </View>
          </View>
        </View>
        <View style={ExercisMultipleThreeStyle.multipleCodeImage2Container}>
               <View style={ExerciseMultipleOneStyle.exerciseOneImage}>
                      <Image
                          source={require("../../Image/toptxt.png")}
                          style={{
                              width: 150,
                              height: 60,
                              resizeMode: "contain",
                              }}
                          />
                  </View>
                  {/* </View> */}
                  </View>
                  <View style={{width:"100%",flexDirection:'row',marginTop:20}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> أ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row',}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> أ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ف </Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row',}}>
                                                    <View style={{width:"20%",bottom:0}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ش</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ج</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ف</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>غ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>غ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ف</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ش</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >

                           <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ج</Text>

                                                    </TouchableOpacity>
                                                    </View>
                                                    
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ل</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ج</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> أ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ح</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> أ</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ش</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> ث</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> أ</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}> غ</Text>
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%",}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"20%",}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEight();
                                                        }}
                                                    >
                                                  <Text style={ExercisMultipleThreeStyle.chooseAvatarImage}>ب</Text>

                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                               
      </View>
      
        </View>
       
 </ScrollView>
   
      </View>

      );
  }
}
