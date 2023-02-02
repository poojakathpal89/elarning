import React from 'react';
import { Text,Button,TextInput, Image,View ,TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StudentStyle from './StudentStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import ButtonStyle from "../../css/button";
import DropdownMenu from '../../react-native-dropdown-menu';
import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";
import { RED } from 'react-native-stories-view/src/utils/colors';




export default class StudentScreen extends React.Component {
    _isMounted = false;
    constructor(props) {
       
        super(props);
        this.state = {
            isLoading: false,
            countriesArray: [],
            statesArray: [],
           
           
            gender: RequestHandler.state.GenderArray,
            selectedStates: "",
            selectedCountry: "",
            displayState:false,
            displayCountry:false,
       
        };
        
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
getStates(_country_id) {
       
    this.setState({ isLoading: true, statesArray: [] });
  console.log(this.state.statesArray)
  console.log(_country_id)
    AuthService.getStatesArray(_country_id)
        .then((response) => {
            const index = response.states.findIndex((e) => e.id == this.state.selectedStates);
            if (index != -1) {
                response.states[index]["checked"] = true;
                this.setState({
                    selectedStates: [this.state.selectedStates],
                    stateIndex:index
                });
            }
            this.setState({ isLoading: false, statesArray: response.states, displayState:true});
            
        })
        .catch((error) => {
            ToastService.tostShort(error);
        });
}
nextStudent() {
    this.props.navigation.navigate("NewStudentScreen");
   
}

  render() {
      return (
        <View style={[GlobalStyle.MainBody,{backgroundColor:'#CACACA'}]}>
        
       
     
        <KeyboardAvoidingView 
        style={{ flex: 1 }}
        {...(Platform.OS === 'ios' && { behavior: 'padding' })}
        enabled>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{}}>
            <View style={[GlobalStyle.authArea,{paddingHorizontal:24,paddingTop:24}]}>
               
                   
                    <View>
                        <View style={{ alignItems: "center", }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.RBSheetPicker.open()}>
                               
                            <Image
                                source={require("../../Image/logo-icon.png")}
                                style={{
                                    width: 350,
                                    height: 100,
                                    resizeMode: "contain",
                                    }} />
                                
                                 </TouchableOpacity>
                               </View>
                        </View>

                        <View style={[StudentStyle.authBox,{backgroundColor:'#F5F5F5'}]}>

                           <View style={StudentStyle.SectionStyle}>
                            <View style={StudentStyle.studentTitleBox}>
                            <View style={StudentStyle.studentTitle}>

                            <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700",marginTop:50 }}>
                            nickname
                            </Text> 
                        
                                </View>
                                <View style={StudentStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:10}} >

                                {/* <Image source={require('../../../Image/usericon.png')}  style={profileStyles.userIcon} /> */}
                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#fff'}]}
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

                             <View style={StudentStyle.SectionStyle}>
                            <View style={StudentStyle.studentTitleBox}>
                            <View style={StudentStyle.studentTitle}>

                            <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700",marginTop:20 }}>
                            email(optional)
                            </Text> 
                        
                                </View>
                                <View style={StudentStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:10}} >

                                {/* <Image source={require('../../../Image/usericon.png')}  style={profileStyles.userIcon} /> */}
                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#fff'}]}
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
                         

                             <View style={StudentStyle.SectionStyle}>
                <View style={[StudentStyle.SectionStyle, { width: "100%", position: "relative" ,marginTop:0}]}>
                 <View style={[StudentStyle.studentTitleBox]}>
                     <View style={[StudentStyle.studentTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700", }}>
                                    Country
                                    </Text> 
                                    <View style={[StudentStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                                    {this.state.countryError ? 
                                <Text style={[StudentStyle.errorclass]}>{this.state.countryError}</Text>
                                : null} 
                                </View>
                                </View>
                                </View>
                      
                                                <View style={[{
                                            width:"100%",'position':'relative',
                                            borderRadius:8,paddingLeft:1,paddingRight:1,
                                           marginTop:20,
                                           top:-40,
                                            backgroundColor:'#fff',
                                            height:48,
                                            width:50,
                                            zIndex:9999,
                                            width:"95%",
                           
                            },this.state.countryError  ? GlobalStyle.inputGenderError :'']} >
                                    <View style={[{flex: 1,flexDirection:'row',zIndex:9999, height:40,borderRadius:8 ,}]}>
                                        {this.state.displayCountry ?
                                        <DropdownMenu
                                            style={{flex: 1,height:48}}
                                            bgColor={'#fff'}
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

                              

                    <View style={StudentStyle.SectionStyle}>
                <View style={[StudentStyle.SectionStyle, { width: "100%", position: "relative" ,marginTop:0}]}>
                 <View style={[StudentStyle.studentTitleBox]}>
                     <View style={[StudentStyle.studentTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700", }}>
                                    State
                                    
                                    </Text> 
                                    <View style={[StudentStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                                    {this.state.countryError ? 
                                <Text style={[StudentStyle.errorclass]}>{this.state.countryError}</Text>
                                : null} 
                                </View>
                                </View>
                                </View>
                  
                                <View style={[{
                                            width:"100%",'position':'relative',
                                            borderRadius:8,paddingLeft:1,paddingRight:1,
                                           marginTop:20,
                                           top:-40,
                                            backgroundColor:'#fff',
                                            height:48,
                                            width:50,
                                            zIndex:9999,
                                            width:"95%",
                           
                            },this.state.stateError  ? GlobalStyle.inputGenderError :'']} >
                                    <View style={[{flex: 1,flexDirection:'row',zIndex:9999, height:40,borderRadius:8 ,}]}>
                                        {this.state.displayState ?
                                    <DropdownMenu
                                    style={{flex: 1,height:48}}
                                    bgColor={'#fff'}
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
         {/* <View style={StudentStyle.SectionStyle}>
                         <View style={[StudentStyle.SectionStyle, { width: "100%",borderColor:"red",borderWidth:1}]}>
                          <View style={[StudentStyle.studentTitleBox]}>
                            <View style={[StudentStyle.studentTitle,{height:40}]}>
            
                                    <Text style={{ height:30,fontSize: 16,textAlign:'right',color: "#0C222C",fontFamily:'CircularStd-Bold', fontWeight: "700" ,borderColor:"red",borderWidth:1,marginTop:40, zIndex:9999,}}>
                                   State
                                    </Text> 
                                    <View style={[StudentStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                             {this.state.stateError ? 
                          <Text style={[StudentStyle.errorclass]}>{this.state.stateError}</Text>
                            : null} 
                          </View>
                                </View>
                                </View>
                 
                           <View style={[{
                                            width:"100%",'position':'relative',
                                            borderRadius:8,paddingLeft:1,paddingRight:1,
                                            top:-40,
                                            marginTop:60,
                                            backgroundColor:'#fff',marginTop:0,
                                            height:48,
                                            zIndex:9999,
                                            width:"95%"
                           
                            },this.state.stateError  ? GlobalStyle.inputGenderError :'']} >
                                    <View style={[{flex: 1,flexDirection:'row',zIndex:9999, height:40,borderRadius:8 }]}>
                                        {this.state.displayState ?
                                        <DropdownMenu
                                            style={{flex: 1,height:48}}
                                            bgColor={'#fff'}
                                            tintColor={'#0C222C'}
                                            activityTintColor={'green'}
                                            arrowImg = {require("../../Image/arrow_down.png")}
                                            handler={(selection, row) => this.setState({selectedStates: selection})}
                                            data={this.state.statesArray}
                                            selectIndex={this.state.selectedStates}
                                            >
                                        </DropdownMenu>
                                        :null}
                                        </View>
                                    </View>
                         </View>

                         </View>    */}
      

                             <View style={StudentStyle.SectionStyle}>
                            <View style={StudentStyle.studentTitleBox}>
                            <View style={StudentStyle.studentTitle}>

                            <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700",marginTop:20 }}>
                            School(optional)
                            </Text> 
                        
                                </View>
                                <View style={StudentStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:10}} >

                                {/* <Image source={require('../../../Image/usericon.png')}  style={profileStyles.userIcon} /> */}
                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#fff'}]}
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
                             <View style={StudentStyle.SectionStyle}>
                            <View style={StudentStyle.profileTitleBox}>
                            <View style={StudentStyle.profileTitle}>

                            <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',textAlign:'right', fontWeight: "700",marginTop:20 }}>
                            mobile(optional)
                            </Text> 
                        
                                </View>
                                <View style={StudentStyle.profileError}>
                                    {this.state.nameError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:10}} >

                                {/* <Image source={require('../../../Image/usericon.png')}  style={profileStyles.userIcon} /> */}
                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#fff'}]}
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
                                 <View style={{ marginTop:30 ,marginLeft:'auto',marginBottom:10}}>
                                    <TouchableOpacity
                                        disabled={this.state.loading}
                                        style={[ButtonStyle.comnButtonStyle, { width: 100 }]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.nextStudent();
                                        }}
                                    >
                                        <Text style={ButtonStyle.comnButtonTextStyle}>
                                        Next
                                        </Text>
                                        {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                                    </TouchableOpacity>
                                </View>                                  
                  </View>  
            </View>
           
        </ScrollView>
        </KeyboardAvoidingView>
    </View>
      );
  }
}