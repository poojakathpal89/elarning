import React, { Component } from "react";
import { View, Text, ActivityIndicator, ScrollView, StatusBar, Image, ImageBackground,TouchableOpacity} from "react-native";
// import PTRView from "react-native-pull-to-refresh";

import LearnExerciseStyle from "./ListExerciseScreenStyle";

//  import CommonStyle from "../../../css/common";
 import HeaderWithBackComponent from "../../component/HeaderWithBackComponent";
// import { OfferService, ToastService,GlobalService,AuthService } from "../../../services/AllServices";
import { Loader ,StatusBarComponent} from "../../../component/AllComponent";
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default class ListExerciseScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: false,
        offerItem: "",
        
        yellowCount: [],
        greenStarCount: [],
    };

    componentDidMount() {
        this.props.navigation.addListener("focus", () => {
            this._isMounted = true;
           
            if (this._isMounted) {
               this.getdata();
            }
        });
    }

    getdata(){
        let data = this.props.route.params.item;
        console.log(data)
        if (this.props.route.params.item) {
            this.setState({ offerItem: this.props.route.params.item });
        }
    }

    reedomCoupon(_item){
      
        let postData = {
            offerId:_item.offer_id
        };
        this.setState({isLoading:true})
        OfferService.redeemOfferRequest(postData).then(res=>{
            this.setState({isLoading:false})
            if (res != "") {
                let array = JSON.parse(res);
                setTimeout(() => {
                    // ToastService.tostShort(array.msg)
                  }, 500);
                
                if (array.status == 5) {
                    AuthService.forceLogout().then(res=>{
                       this.props.navigation.replace("Auth")
                    }); 
                }
            }
        })
    }

    _refresh = () => {
        this.getdata();
    };

    StarOneClick(){
 this.props.navigation.navigate("ExerciseMultipleOne");
    }
    StarTwoClick(){
        this.props.navigation.navigate("ExerciseMultipleTwo");
 
    }
    StarThreeClick(){
        this.props.navigation.navigate("ExerciseMultipleThree");
 
    }
    starFourRowClick(){
        this.props.navigation.navigate("ExerciseMultipleFour");
 
    }
    starFiveRowClick(){
        this.props.navigation.navigate("ExerciseMultipleFive");
 
    }
    starSixRowClick(){
        this.props.navigation.navigate("ExerciseMultipleSix");
 
    }
    starSevenRowClick(){
        this.props.navigation.navigate("ExerciseMultipleSeven");
 
    }
    
    
    

    render() {
        return (
              
    <View style={[LearnExerciseStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
    {/* <FooterComponent/> */}
    <HeaderWithBackComponent props={this.props} />
   <ScrollView>
   <View style={LearnExerciseStyle.container}>
   <View style={[LearnExerciseStyle.menuArea2]}>
   <View style={LearnExerciseStyle.multipleCodeImage2Container}>
                    <View style={LearnExerciseStyle.exerciseOneImage}>
            <Image
                       source={require("../../Image/exerciseonetxt.png")}
                       style={{
                           width: 100,
                           height: 20,
                           resizeMode: "contain",
                           }}
                       />
               </View>
               </View>
     </View>
   <View style={LearnExerciseStyle.btnTextContainer}>
 <View style={LearnExerciseStyle.studentCodeContainer}>
            <View  style={LearnExerciseStyle.buttonStyle}>
           <Text>  {this.state.offerItem.name}</Text>
               {/* <Image
                       source={require("../../Image/learntxt-icon.png")}
                       style={{
                           width: 100,
                           height: 50,
                           resizeMode: "contain",
                           }}
                       /> */}
                 </View>
           </View>
           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
      this.StarOneClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
      this.StarOneClick();
     }} >
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
      this.StarOneClick();
     }} >
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>

                 </View>
           </View>

           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarTwoClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarTwoClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarTwoClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
              

                 </View>
           </View>
           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarThreeClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarThreeClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.StarThreeClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
               
                 </View>
           </View>
          
           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFourRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFourRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFourRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>

                 </View>
           </View>
           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFiveRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFiveRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starFiveRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
              
                 </View>
           </View>
           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSixRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSixRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSixRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
              

                 </View>
           </View>

           <View style={LearnExerciseStyle.starImage}>
            <View  style={LearnExerciseStyle.buttonStyle}>
            <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSevenRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSevenRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
     <TouchableOpacity
     activeOpacity={0.5}
     onPress={() => {
       this.starSevenRowClick();
     }}
     >
 
 <Image source={require("../../Image/yellowStar.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
     </TouchableOpacity>
              
           </View>
           </View>
   </View>
     </View>
    
</ScrollView>


       <View style={{ flex: 1 }}>
                 <RBSheet
                     ref={(ref) => {
                         this.RBSheetEarn = ref;
                     }}
                     height={200}
                     openDuration={150}
                     customStyles={{
                         container: {
                             borderTopRightRadius: moderateScale(24),
                             borderTopLeftRadius: moderateScale(24),
                             paddingVertical: moderateScale(20),
                             paddingHorizontal: moderateScale(20),
                         },
                     }}
                 >
                     <ScrollView >
                         <View style={LearnExerciseStyle.bottomActionSheetBox}>
                             <View style={LearnExerciseStyle.bottomswiperHeadingBox}>
                             <View style={{flexDirection:'row',flex:1}}>
                                   <Image source={require("../../Image/pic12.png")} style={{width: 40, height:30, resizeMode: 'contain',borderRadius:10}} />
                                   <Image source={require("../../Image/star1.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                           <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>
                           <Image source={require("../../Image/dollersign.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                           <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>

                           </View>
                                 
                             </View>
                             <View style={LearnExerciseStyle.shareWithFrndBg}>
                                 <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Settings'}</Text>
                                   </View>
                                   <View style={LearnExerciseStyle.shareWithFrndBg}>
                                 <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'share app'}</Text>
                                   </View>
                                   <View style={LearnExerciseStyle.shareWithFrndBg}>
                                 <Text style={LearnExerciseStyle.shareTicketTextStyle}>{'Log out / change account'}</Text>
                                   </View>

                             <View style={{ alignItems: "center" }}>
                                 <TouchableOpacity
                                     style={[LearnExerciseStyle.earnComnButtonStyle,LearnExerciseStyle.earnBtn]}
                                     activeOpacity={0.5}
                                     onPress={() => {
                                         // this.InvitePopup();
                                     }} >
                                   </TouchableOpacity>
                                

                             </View>
                         
                         </View>
                     </ScrollView>
                 </RBSheet>
             </View>


   </View>

        );
    }
}
