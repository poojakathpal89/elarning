import React from 'react';
import { Text,Image,Button,TextInput,ScrollView, View ,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 import MainDashBoardStyle from './MainDashBoardStyle';
 import GlobalStyle from "../../css/style";
 import CommonStyle from '../../css/common';
 import ButtonStyle from "../../css/button";
 import DropdownMenu from '../../react-native-dropdown-menu';
 import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";





export default class MainDashBoardScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      countriesArray: [],
      selectedStates: "",
            selectedCountry: "",
            displayState:false,
            displayCountry:false,
      }
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
      this.getCountriesArray();
  }
 
  getCountriesArray() {
    this.setState({ isLoading: true, countriesArray: [] });
   
  
    AuthService.getCountriesArray()
        .then((response) => {
          
            if (this.state.selectedCountry != "") {
                const index = response.data.countries.findIndex((e) => e.id == this.state.selectedCountry);
                if (index != -1) {
                    response.data.countries[index]["checked"] = true;
                    this.setState({ countryIndex:index,selectedCountry: [this.state.selectedCountry] });
                  
                }
console.log("select country",parseInt(this.state.selectedCountry))
                this.getStates(parseInt(this.state.selectedCountry));
            }

            this.setState({ countriesArray: response.data.countries,displayCountry:true});
            
      
            //this.getAvtar(this.state.selectedCountry);
        })
        .catch((error) => {
            ToastService.tostShort(error);
        });
}

  render() {
      return (
        <View style={[GlobalStyle.MainBody,{backgroundColor:'#E7E2E2',}]}>

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
        
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{}}>
            <View style={[MainDashBoardStyle.authArea,{  }]}>
                <View style={[MainDashBoardStyle.menuCardBox]}>

                              <View style={MainDashBoardStyle.SectionStyle}>
                            <View style={MainDashBoardStyle.studentTitleBox}>
                            <View style={MainDashBoardStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            nickname
                            </Text>  
         
                         </View>
                                <View style={MainDashBoardStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                {/* <Image source={require('../../../Image/usericon.png')}  style={profileStyles.userIcon} /> */}
                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(name) => {
                                        this.setState({ name: name });
                                    }}
                                    placeholder=""
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View>
                             <View style={MainDashBoardStyle.SectionStyle}>
                            <View style={MainDashBoardStyle.studentTitleBox}>
                            <View style={MainDashBoardStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            email(Optional)
                            </Text>  
         
                         </View>
                                <View style={MainDashBoardStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(name) => {
                                        this.setState({ name: name });
                                    }}
                                    placeholder=""
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View>
                             {/* <View style={MainDashBoardStyle.SectionStyle}>
                            <View style={MainDashBoardStyle.studentTitleBox}>
                            <View style={MainDashBoardStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            country
                            </Text>  
         
                         </View>
                                <View style={MainDashBoardStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(name) => {
                                        this.setState({ name: name });
                                    }}
                                    placeholder=""
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View> */}
                                <View style={MainDashBoardStyle.SectionStyle}>
                <View style={[MainDashBoardStyle.SectionStyle, { width: "100%", position: "relative" ,marginTop:0}]}>
                 <View style={[MainDashBoardStyle.studentTitleBox]}>
                     <View style={[MainDashBoardStyle.studentTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700", }}>
                                    Country
                                    </Text> 
                                    <View style={[MainDashBoardStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                                    {this.state.countryError ? 
                                <Text style={[MainDashBoardStyle.errorclass]}>{this.state.countryError}</Text>
                                : null} 
                                </View>
                                </View>
                                </View>
                      
                                                <View style={[{
                                            width:"100%",'position':'relative',
                                            borderRadius:8,paddingLeft:1,paddingRight:1,
                                           marginTop:20,
                                           top:-40,
                                            backgroundColor:"#F9FAFB",
                                            height:48,
                                            width:50,
                                            zIndex:9999,
                                            width:"95%",
                           
                            },this.state.countryError  ? GlobalStyle.inputGenderError :'']} >
                                    <View style={[{flex: 1, backgroundColor:"#F9FAFB",flexDirection:'row',zIndex:9999, height:40,borderRadius:8 ,}]}>
                                        {this.state.displayCountry ?
                                        <DropdownMenu
                                            style={{flex: 1,height:48}}
                                            bgColor={'#F9FAFB'}
                                            tintColor={'#0C222C'}
                                            activityTintColor={'green'}
                                            arrowImg = {require("../../Image/arrow_down.png")}
                                             handler={(selection, row) => this.setState({selectedCountry: selection})}
                                            data={this.state.countriesArray}
                                             selectIndex={this.state.selectedCountry}
                                            >
                                        </DropdownMenu>
                                        :null}
                                        </View>
                                    </View>                     
                                     </View>
                                  </View>
                           
                               <View style={MainDashBoardStyle.SectionStyle}>
                <View style={[MainDashBoardStyle.SectionStyle, { width: "100%", position: "relative" ,marginTop:0}]}>
                 <View style={[MainDashBoardStyle.studentTitleBox]}>
                     <View style={[MainDashBoardStyle.studentTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700", }}>
                                    State
                                    </Text> 
                                    <View style={[MainDashBoardStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                                    {this.state.countryError ? 
                                <Text style={[MainDashBoardStyle.errorclass]}>{this.state.countryError}</Text>
                                : null} 
                                </View>
                                </View>
                                </View>
                      
                                 <View style={[{
                                    width:"100%",'position':'relative',
                                    borderRadius:8,paddingLeft:1,paddingRight:1,
                                marginTop:20,
                                top:-40,
                                    backgroundColor:"#F9FAFB",
                                    height:48,
                                    width:50,
                                    zIndex:9999,
                                    width:"95%",
                           
                            },this.state.countryError  ? GlobalStyle.inputGenderError :'']} >
                                    <View style={[{flex: 1, backgroundColor:"#F9FAFB",flexDirection:'row',zIndex:9999, height:40,borderRadius:8 ,}]}>
                                        {this.state.displayCountry ?
                                        <DropdownMenu
                                            style={{flex: 1,height:48}}
                                            bgColor={'#F9FAFB'}
                                            tintColor={'#0C222C'}
                                            activityTintColor={'green'}
                                            arrowImg = {require("../../Image/arrow_down.png")}
                                             handler={(selection, row) => this.setState({selectedCountry: selection})}
                                            data={this.state.countriesArray}
                                             selectIndex={this.state.selectedCountry}
                                            >
                                        </DropdownMenu>
                                        :null}
                                        </View>
                                    </View>                     
                                     </View>
                                  </View>
                             <View style={MainDashBoardStyle.SectionStyle}>
                            <View style={MainDashBoardStyle.studentTitleBox}>
                            <View style={MainDashBoardStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            school(optional)
                            </Text>  
         
                         </View>
                                <View style={MainDashBoardStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(name) => {
                                        this.setState({ name: name });
                                    }}
                                    placeholder=""
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View>
                             <View style={MainDashBoardStyle.SectionStyle}>
                            <View style={MainDashBoardStyle.studentTitleBox}>
                            <View style={MainDashBoardStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            mobile(optional)
                            </Text>  
         
                         </View>
                                <View style={MainDashBoardStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(name) => {
                                        this.setState({ name: name });
                                    }}
                                    placeholder="(406) 555-0120"
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View>

                             <View style={{ marginTop:30 ,marginLeft:'auto',marginBottom:10}}>
                                    <TouchableOpacity
                                        disabled={this.state.loading}
                                        style={[MainDashBoardStyle.comnButtonStyle, { width: 100 }]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextStudent();
                                        }}
                                    >
                                        <Text style={ButtonStyle.comnButtonTextStyle}>
                                        NEXT
                                        </Text>
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                                </View>  
                        </View>
            </View>
    </ScrollView>
    </View>
      );
  }
}