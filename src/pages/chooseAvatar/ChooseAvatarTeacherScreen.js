import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import ChooseAvatarTeacherStyle from './ChooseAvatarTeacherStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import { AuthService } from "../../services/AllServices";

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


export default class ChooseAvatarTeacherScreen extends React.Component {
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
  setAvtaarOne(){
    this.props.navigation.navigate("newTeacherPrint");
  }
  setAvtaarTwo(){
    this.props.navigation.navigate("newTeacherPrint");

  }
  setAvtaarThree(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarFour(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarFive(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarSix(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarSeven(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarEight(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarNine(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarTen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarEleven(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarTwelve(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarThirteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarFourteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarFifteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarSixteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarSeventeen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarEighteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarNinteen(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarTwenty(){
    this.props.navigation.navigate("newTeacherPrint");
 }
 setAvtaarTwentyOne(){
    this.props.navigation.navigate("newTeacherPrint");
 }

 OnButtonClick() {
    this.props.navigation.navigate("newTeacherPrint");  
}
setAvtaar(_item) {
    /// console.log('ite=============',_item[1])

    //  if(this.state.colorId!=''){
    //      this.setState({ avatarId: parseInt(_item[0]), avtarimage: _item[1], isPic: false,photo:"" });
    //  }else{
    //  }
     /// this.RBSheet.close();
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
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={ChooseAvatarTeacherStyle.container}>
               
              
              <View style={CommonStyle.logoOnlyHeader}>
                      <Image
                          source={require("../../Image/logo-icon.png")}
                          style={{
                              width: 550,
                              height: 70,
                              resizeMode: "contain",
                              }} />
                  </View>
 
                  <ScrollView>
                                <View style={ChooseAvatarTeacherStyle.bottomActionSheetBox}>
                                    <View style={ChooseAvatarTeacherStyle.bottomswiperHeadingBox}>
                                    <Text style={ChooseAvatarTeacherStyle.bottomswiperHeading}>
                                        اختار صورة رمزية
                                        </Text>
                                        <Text style={ChooseAvatarTeacherStyle.bottomswiperHeading}>
                                        يمكنك تغييره في الإعدادات لاحقًا
                                        </Text>
                                        <Image
                                        style={ChooseAvatarTeacherStyle.dashedSeparator}/>
                                       
                                    </View>
                                    <View style={ChooseAvatarTeacherStyle.chooseAvatarArea}>
                                            <View style={ChooseAvatarTeacherStyle.chooseAvatarBox}>
                                                <View style={{width:"100%",flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarOne();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic1.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarTwo();
                                                        }}>
                                                         <Image  source={require("../../Image/pic2.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarThree();
                                                        }} >
                                                        <Image  source={require("../../Image/pic3.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarFour();
                                                        }}>
                                                        <Image  source={require("../../Image/pic4.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarFive();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic5.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSix();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic6.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
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
                                                        
                                                       <Image  source={require("../../Image/pic7.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeven();
                                                        }}>
                                                        
                                                       <Image  source={require("../../Image/pic8.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
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
                                                        
                                                       <Image  source={require("../../Image/pic9.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarNine();
                                                        }}
                                                    >
                                                        
                                                       <Image  source={require("../../Image/pic10.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarTen();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic11.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarEleven();
                                                        }}
                                                    >
                                                        
                                                       <Image  source={require("../../Image/pic12.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarTwelve();
                                                        }}
                                                    >
                                                        
                                                       <Image  source={require("../../Image/pic13.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarThirteen();
                                                        }}
                                                    >
                                                        
                                                       <Image  source={require("../../Image/pic14.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarFourteen();
                                                        }}
                                                    >
                                                        
                                                       <Image  source={require("../../Image/pic15.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                               
                                                <View style={{width:"100%",flexDirection:'row'}}>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarFifteen();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic19.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSixteen();
                                                        }} >
                                                        
                                                       <Image  source={require("../../Image/pic20.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                    <View style={{width:"33%"}} >
                                                    <TouchableOpacity
                                                        // key={key}
                                                        style={{ marginHorizontal: 0 }}
                                                        onPress={() => {
                                                            this.setAvtaarSeventeen();
                                                        }}>
                                                        
                                                       <Image  source={require("../../Image/pic21.png")} style={ChooseAvatarTeacherStyle.chooseAvatarImage} />
                                                      
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                                 </View>
                                                </View>
                                 
           <View style={ChooseAvatarTeacherStyle.buttonContainer}>
        <View  style={ChooseAvatarTeacherStyle.buttonStyle}>
        <TouchableOpacity
        
          activeOpacity={0.5}
            onPress={() => {
              this.OnButtonClick();
            }} >
            <Text style={ChooseAvatarTeacherStyle.newStudentNextTxt}>التالى</Text>
              </TouchableOpacity>
                  </View>
              </View>

                              </View>
                            </ScrollView>
                </View>
             
             </ScrollView>
              </View>
          
            );
          };

        }