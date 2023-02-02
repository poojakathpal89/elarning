import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import ChooseAvtarStyle from './ChooseAvtarStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
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


export default class ChooseAvatarScreen extends React.Component {
  constructor(props) {
      super(props);
      state = {
     
        avtarArray: [],
      }
  
  };

  
  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
      this.getAvtar();
  }

  nextBtn() {
    this.props.navigation.navigate("newStudentThree");
   
}
getAvtar() {
    this.setState({ avtarArray: [] });
    AuthService.getAvtar()
        .then((response) => {
            /// console.log(typeof response.avatars);
            /// console.log('response',response.avatars)
            if (response.status == 1) {
                this.setState({ avtarArray: response.avatars, isLoading: false });
            } else {
                ToastService.tostShort(response.msg);
            }
        })
        .catch((error) => {
            ToastService.tostShort(error);
        });
}
  render() {
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={ChooseAvtarStyle.container}>
                <View style={[ChooseAvtarStyle.menuArea2]}>
              
              <View style={CommonStyle.logoOnlyHeader}>
                      <Image
                          source={require("../../Image/logo-icon.png")}
                          style={{
                              width: 350,
                              height: 70,
                              resizeMode: "contain",
                              }} />
                  </View>
                  <View style={ChooseAvtarStyle.chopseAvtarOnlyHeader}>
                      <Image
                          source={require("../../Image/chooseAvtartxt.png")}
                          style={{
                              width: 350,
                              height: 70,
                              resizeMode: "contain",
                              }} />
                  </View>
                  <ScrollView>
                                <View style={ChooseAvtarStyle.bottomActionSheetBox}>
                                    <View style={ChooseAvtarStyle.bottomswiperHeadingBox}>
                                        <Text style={ChooseAvtarStyle.bottomswiperHeading}>
                                        Choose Avatar Picture
                                        </Text>
                                        <Image
                                        //  source={require("../../../Image/separater-dashed.png")}
                                        style={ChooseAvtarStyle.dashedSeparator}/>
                                        {/* <Text style={registerStyle.bottomswiperSubheading}>
                                        {GlobalService.Profile ? GlobalService.Profile.RAPP_CHOOSE_ONE : 'Choose one'}</Text> */}
                                    </View>
                                    <View style={ChooseAvtarStyle.chooseAvatarArea}>
                                        {this.state.avtarArray && (
                                            <View style={ChooseAvtarStyle.chooseAvatarBox}>
                                                {Object.entries(this.state.avtarArray).map((item, key) => (
                                                    (key<=47 && 
                                                    <TouchableOpacity
                                                        key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaar(item);
                                                        }}
                                                    >
                                                       <Image source={{ uri: this.state.avtarArray[key+1] }} style={registerStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    )
                                                ))}
                                            </View>
                                        )}
                                    
                                    </View>
                                 


                                    <View style={{  marginTop: 25,width:'100%',alignItems:'center'}}>
                                    <TouchableOpacity
                                      disabled={this.state.loading}
                                      style={[ButtonStyle.commonBlackButton, {width:'100%',}]}
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                this.RBSheet.close();
                                                this.RBSheetPicker.close();
                                            }}
                                        >
                                        <Text style={ButtonStyle.comnButtonTextStyle}>
                                        {GlobalService.Profile ? GlobalService.Profile.RAPP_PROFILE_SAVE_CHANGE : 'Save Changes'}
                                        </Text>
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                         </TouchableOpacity>
                                </View>
                              </View>
                            </ScrollView>
                </View>
              </View>
             </ScrollView>
              </View>
          
            );
          };

        }