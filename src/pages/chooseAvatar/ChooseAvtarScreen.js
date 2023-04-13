import React from 'react';
import {Text,Image, View,TouchableOpacity,Button,ScrollView} from 'react-native';
import ChooseAvtarStyle from './ChooseAvtarStyle';
import GlobalStyle from "../../css/style";
import registerStyle from "./registerStyle"
import CommonStyle from '../../css/common';
import { AuthService } from "../../services/AllServices";
import { GlobalService ,RequestHandler,ToastService} from '../../services/AllServices';


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
     
  };
  state = {
    avatarId:0,
       avtarArray: [],
     }
  
  componentDidMount() {
    
    GlobalService.regData.avatarId=0;
      // console.log(StringsOfLanguages.languageObj);
      this.getAvtar();
  }

  setAvtar(_itemId){
   
    GlobalService.regData.user_avatar_id = _itemId
    
    this.setState({avatarId:_itemId})
   
   
  }
  OnButtonClick(){
    console.log(GlobalService.regData.avatarId)
   if(GlobalService.regData.user_avatar_id== undefined ||   GlobalService.regData.user_avatar_id<1){
    ToastService.tostShort("Please Select Avatar")
    return false;

   }
    
        this.props.navigation.navigate("GradeList");
      
      }
  
 
//   setAvtar(_item) {
//      (GlobalService.regData.avatarId == 1)
//         this.props.navigation.navigate("Subjects");
    
    
  
//     /// console.log('ite=============',_item[1])

//     //  if(this.state.colorId!=''){
//     //      this.setState({ avatarId: parseInt(_item[0]), avtarimage: _item[1], isPic: false,photo:"" });
//     //  }else{
//     //  }
//      /// this.RBSheet.close();
//  }

getAvtar() {
    this.setState({ avtarArray: [] });
    AuthService.getAvtar()
        .then((response) => {
           
             console.log('response',response.avatars)
            if (response.status == 1) {
                RequestHandler.state.avtarArray= response.avatars;
                this.setState({ avtarArray: response.avatars, isLoading: false });
                   this.forceUpdate() 
            } else {
                // ToastService.tostShort(response.msg);
            } 
        })
        .catch((error) => {
         //   ToastService.tostShort(error);
        });
}
  render() {
    function toChunkArray(myArray: any, chunkSize: any): any {
        var results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunkSize));
        }

        return results;
    }

    // let chunkedArraysOfColSize  = toChunkArray( RequestHandler.state.avtarArray,3);
      return (
              <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
                <ScrollView>
                <View style={ChooseAvtarStyle.container}>
               
              
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
                                <View style={ChooseAvtarStyle.bottomActionSheetBox}>
                                    <View style={ChooseAvtarStyle.bottomswiperHeadingBox}>
                                        <Text style={ChooseAvtarStyle.bottomswiperHeading}>
                                        اختار صورة رمزية
                                        </Text>
                                        <Text style={ChooseAvtarStyle.bottomswiperHeading}>
                                        يمكنك تغييره في الإعدادات لاحقًا
                                        </Text>
                                        <Image
                                        style={ChooseAvtarStyle.dashedSeparator}/>
                                       
                                    </View>
                                        
                                          <View style={ChooseAvtarStyle.chooseAvatarArea}>
                                              {  
                                              this.state.avtarArray && (
                                                  <View style={ChooseAvtarStyle.chooseAvatarBox}>
                                                      {this.state.avtarArray.map((item, key) => (
                                                        
                                                        <TouchableOpacity
                                                        key={key}
                                                        style={[(this.state.avatarId == item.id)  ? GlobalStyle.avatarSelected :"",{marginHorizontal:0}]}
                                                        onPress={() => {
                                                            this.setAvtar(item.id);
                                                        }}
                                                    >
                                                        <Image source={{ uri: item.name }} style={registerStyle.chooseAvatarImage} />
                                                    </TouchableOpacity>
                                                      ))}
                                                  </View>
                                              )}

                                          

                                           
                                          </View>
                                          
                                    
            
       
        <TouchableOpacity
        
          activeOpacity={0.5}
            onPress={() => {
              this.OnButtonClick();
            }} >
               <View style={ChooseAvtarStyle.buttonContainer}>
        <View  style={ChooseAvtarStyle.buttonStyle}>
            <Text style={ChooseAvtarStyle.newStudentNextTxt}>التالى</Text>
            </View>
             
              </View>
              </TouchableOpacity>
                  </View>
              
                    

                </ScrollView>
                </View>
             
             </ScrollView>
              </View>
          
            );
          };

        }