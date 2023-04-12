import React, { Component } from "react";
import {  TouchableOpacity, Image, View, Text ,ScrollView,StyleSheet} from "react-native";
import GlobalStyle from "../css/style";
import {GlobalService} from "../services/AllServices";
import RBSheet from 'react-native-raw-bottom-sheet';
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { NavigationContainer } from '@react-navigation/native';



export default class StudentFooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: "",
            moneymatters: 2,
            offers: "",
            myVouchers:"",
        };
    }

    
    async shareEarnData(){
        const uri = ''
        // const title = GlobalService.Profile ? GlobalService.Profile.RAPP_SHARE_EARN_TEXT :  GlobalService.discountTitle ;

        const subject = this.state.shareEarnURL
        let message = subject;
        const options = Platform.select({
            ios: {
              subject:title,
              title:title,
              url:this.state.shareEarnURL
            },
            default: {
              title,
              subject: title,
              message: `${message}`,
            },
          });
           
              try {
                const ShareResponse = await Share.open(options);
               
               
              } catch(error) {

              }
        }
    InvitePopup = () => {
        
        this.shareEarnData().then((res) => {  
            this.RBSheetEarn.close();              
        });
        //
    };

    render() {
        const { active, props } = this.props;
   //// console.log('active-----',GlobalService.Home.RAPP_MONEY_MATTERS);
        return (
            <>
             {active != undefined && (
                // <View style={[GlobalStyle.bottemComponent]}>
                <View style={[GlobalStyle.bottomNav]}>
                <View style={{ width: "33%" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("SubjectScreenStack", {
                                        screen: "SubjectScreen",
                                    });
                                    // this.props.navigation.navigate("Subjects");
                                    //  this.RBSheetEarn.open()
                                }} style={GlobalStyle.bottomNavLeftItem}>
                              <Image source={require("../Image/bookshelf.png")} style={GlobalStyle.footerImage} />

                                 {/* <Image source={require("../Image/text-books.png")} style={{width: 0, height:30, resizeMode: 'contain'}} /> */}
                                 <View style={{width: 0 }} />
                                
                                        <Text style={GlobalStyle.bottomNavText}>Subjects</Text>
                                 
                            </TouchableOpacity>
                </View>
                <View style ={{width:"33%"}}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("MultipleGroupsScreen", {
                                screen: "MultipleGroupsScreen",
                            });
                          

                        }} style={GlobalStyle.bottomNavLeftItem}>
                        <Image source={require("../Image/people.png")} style={GlobalStyle.footerImage} />

                            <View style={{width: 0}} />

                                <Text style={GlobalStyle.bottomNavText}>Group</Text>
                               
                    </TouchableOpacity>
                    </View>

                    <View style ={{width:"33%"}}>
                    <TouchableOpacity
                        onPress={() => {
                            // props.navigation.navigate("MyVoucherScreenStack", {
                            //     screen: "MyVoucherScreen",
                            // });
                            this.RBSheetEarn.open()

                        }} style={GlobalStyle.bottomNavLeftItem}>
                            <Image source={require("../Image/pic12.png")} style={GlobalStyle.footerImage} />

                            <View style={{width: 0, }} />

                       
                                <Text style={GlobalStyle.bottomNavText}>Student Name</Text>
                          
                    </TouchableOpacity>
                    </View>

            {/* <View style ={{width:"50%"}}>
                    <TouchableOpacity
                        onPress={() => {
                            // props.navigation.navigate("MyVoucherScreenStack", {
                            //     screen: "MyVoucherScreen",
                            // });
                            this.RBSheetEarn.open()

                        }} style={GlobalStyle.bottomNavRightItem}>
                            <Image source={require("../Image/pic12.png")} style={{width: 70, height:30, resizeMode: 'contain',borderRadius:5}} />

                        
                        { active == 'myVouchers' ?
                               <>

                                <Text style={GlobalStyle.bottomNavTextActive}>student Name</Text>
                                <View style={GlobalStyle.bottomNavActiveVector}></View>
                               </>
                                :
                                <Text style={GlobalStyle.bottomNavText}>student Name</Text>
                            }
                    </TouchableOpacity>
                    </View> */}
                   
                   
                    <View style={{ flex: 1 ,width:"50%"}}>
                    <RBSheet
                        ref={(ref) => {
                            this.RBSheetEarn = ref;
                        }}
                        height={200}
                        openDuration={150}
                        customStyles={{
                            wrapper:{
                                backgroundColor:'transparent',
                                width:'70%',
                                alignSelf:'flex-end'
                            },
                            container: {
                                borderTopRightRadius: moderateScale(24),
                                borderTopLeftRadius: moderateScale(24),
                                paddingVertical: moderateScale(20),
                                paddingHorizontal: moderateScale(20),
                                marginBottom:100,
                            },
                        }}  >


                        <ScrollView >
                            <View style={styles.bottomActionSheetBox}>
                                <View style={styles.bottomswiperHeadingBox}>
                                <View style={{flexDirection:'row',flex:1,alignSelf:'flex-end'}}>
                                      <Image source={require("../Image/pic12.png")} style={{width: 90, height:50, resizeMode: 'contain',borderRadius:10,marginRight:30}} />
                                      <Image source={require("../Image/star1.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>
                              <Image source={require("../Image/dollersign.png")} style={{width: 30, height:20, resizeMode: 'contain',borderRadius:10,marginTop:5,}} />
                              <Text style={{marginTop:5,fontSize:20,marginStart:5}}>0</Text>

                              </View>
                                </View>




                                <View style={{flexDirection:'row',flex:1,alignSelf:'flex-end',marginTop:5}}>
                            <Text style={styles.shareTicketTextStyle}>{'Settings'}</Text>
                                  </View>


                                  <View style={{flexDirection:'row',flex:1,alignSelf:'flex-end',marginTop:10}}>
                                  <TouchableOpacity
                                    style={[styles.earnComnButtonStyle,styles.earnBtn]}
                                    activeOpacity={0.5}
                                     onPress={() => {
                                        this.InvitePopup();
                                    }}>
                            <Text style={styles.shareTicketTextStyle}>{'share app'}</Text>

                     </TouchableOpacity>
                                  </View>

                          
                                      
         <View style={{alignSelf:'flex-end'}}>
        <View style={styles.shareWithFrndBg}>
        <TouchableOpacity
        style={[styles.earnComnButtonStyle,styles.earnBtn]}
        activeOpacity={0.5}
        onPress={() => {
            GlobalService.userData.userInfo="";
                props.navigation.navigate("Main", {
                screen: "Main",
                    });
            
        }} >
        <Text style={styles.shareTicketTextStyle}>{'Log out / change account'}</Text>

        </TouchableOpacity>
        </View>
        </View>

{/* 
                                <View style={{ alignItems: "center" }}>
                                    <TouchableOpacity
                                        style={[styles.earnComnButtonStyle,styles.earnBtn]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            // this.InvitePopup();
                                        }} >
                                      </TouchableOpacity>
                                   

                                </View> */}
                            
                            </View>
                        </ScrollView>
                    </RBSheet>
                   </View>
                </View> 
                // </View>
                )}
            </>
        );
    }
}


const styles = StyleSheet.create({ 
    bottomswiperHeadingBox: {

        alignItems: "center",
       
    },
    shareWithFrndBg:{
        flex:1,
        flexDirection:'row',
        fontSize: moderateScale(14), 
        color: "#3EB881",
        marginBottom:10,
        fontWeight: "500",
        marginTop:10
      },
      shareTicketTextStyle:{
        color: '#000',
        fontSize: 20,
        fontFamily:'CircularStd-Book',
        fontWeight:'500',
      alignSelf:"flex-end"
      },

   
});