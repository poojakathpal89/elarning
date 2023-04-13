import React from 'react';
import { Text,Image,Button,TextInput,ScrollView, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//  import NewTeacherNameStyle from './NewTeacherNameStyle';
import TeacherRegisterStyle from './TeacherRegisterStyle';
 import GlobalStyle from "../../css/style";
 import CommonStyle from '../../css/common';
 import ButtonStyle from "../../css/button";
 import DropdownMenu from '../../react-native-dropdown-menu';
 import SelectDropdown from 'react-native-select-dropdown';
 import { default as FontAwesome, default as Icon } from "react-native-vector-icons/FontAwesome";
//  import { default as FontAwesome, default as Icon } from "react-native-vector-icons/FontAwesome";
import { AuthService, GlobalService, RequestHandler, GlobalShareService,ToastService } from "../../services/AllServices";





export default class TeacherRegisterScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      countriesArray: [],
      selectedStates: "",
            selectedCountry: "",
            displayState:false,
            displayCountry:false,
            errorPass:false,
            name: "",
            email: "",
            school:"",
            multiPlayer:"",
            mobile: "",
      loading: false,
      secureTextEntry: true,
      errorPass:false
      }
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
      console.log("GlobalService.locationEnabled",GlobalService);
      GlobalService.shareNavigate = true;
      this.getCountriesArray();
  }

  validateEmail(_email) {
    let postDataValidate = {
        value: _email,
        type: "email",
    };
    console.log(postDataValidate)
    this.setState({ emailError: "" });
    AuthService.validateUser(postDataValidate)
        .then((res) => {
            console.log(res)
           if (res.status == false) {
                this.setState({ emailError: res.msg });
            }
        })
        .catch((error) => {
            console.log("error", error);
        });
}
  goToNextBtn(){
    this.setState({  nameError: "",emailError: "",schoolError:"", mobileError: "" ,countryError: "", stateError: "", mobileError: "" ,});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let error = false;

        if (this.state.name == "") {
          this.setState({ nameError:GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_FULL_NAME +' '+GlobalService.Register.RAPP_FORM_REQUIRED : "Nickname is required" });
          error = true;
      }
  //   if (this.state.email == "") {
  //     this.setState({ emailError: GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_EMAIL +' '+GlobalService.Register.RAPP_FORM_REQUIRED : "Email is required" });
  //     error = true;
  // }
//   if (this.state.school == "") {
//     this.setState({ schoolError:GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_FULL_NAME +' '+GlobalService.Register.RAPP_FORM_REQUIRED : "School name is required" });
//     error = true;
// }
// if (this.state.mobile == "") {
//   this.setState({ mobileError: GlobalService.Register ? GlobalService.Register.RAPP_PHONE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :"Mobile is required" });
//   error = true;
// }
  // if (reg.test(this.state.email) === false) {
  //     error = true;
  //     this.setState({ emailError: GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_EMAIL_ERROR : "Enter valid email" });
  // }

  if (this.state.email!='' && reg.test(this.state.email) === false) {
    error = true;
    this.setState({ emailError: GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_EMAIL_ERROR : "Enter valid email" });
}
  if (this.state.selectedCountry<1) {
    this.setState({ countryError:GlobalService.Register ? GlobalService.Register.RAPP_PROFILE_COUNTRY +' '+GlobalService.Register.RAPP_FORM_REQUIRED :  "Country is required" });
    error = true;
}


if (this.state.selectedStates <1) {
    this.setState({ stateError:GlobalService.Register ? GlobalService.Register.RAPP_PROFILE_STATE +' '+GlobalService.Register.RAPP_FORM_REQUIRED :  "State is required" });
    error = true;
}

if (error == false) {
           
  let postData = {
      user_name: this.state.name,
      user_email: this.state.email,
      user_country_id: parseInt(this.state.selectedCountry),
      user_state_id: parseInt(this.state.selectedStates),
      user_school: this.state.school,
      user_mobile: this.state.mobile,
      user_type: 2,
      

  }; 
  console.log('register post data',postData)
  GlobalService.regData = postData;
  GlobalShareService.shareData = '';
  this.props.navigation.navigate("ChooseAvtar");
} else {
  return false;
    
  }
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
            // ToastService.tostShort(error);
        });
}

getStates(_country_id) {
       
    this.setState({ isLoading: true, statesArray: [] });
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
            this.setState({ isLoading: false, statesArray: response.states });
            
        })
        .catch((error) => {
            // ToastService.tostShort(error);
        });
}

  render() {
      return (
        <View style={[GlobalStyle.MainBody,{backgroundColor:'#E7E2E2',}]}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{}}>

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
        
            <View style={[TeacherRegisterStyle.authArea,{  }]}>
                <View style={[TeacherRegisterStyle.menuCardBox]}>

                              <View style={TeacherRegisterStyle.SectionStyle}>
                            <View style={TeacherRegisterStyle.studentTitleBox}>
                            <View style={TeacherRegisterStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            nickname
                            </Text>  
         
                         </View>
                                <View style={TeacherRegisterStyle.newTeacherError}>
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
                                   value={this.state.name}
                                  underlineColorAndroid="#f000"
                                   blurOnSubmit={false}
                                     />
                            </View>
                             </View>
                             <View style={TeacherRegisterStyle.SectionStyle}>
                            <View style={TeacherRegisterStyle.studentTitleBox}>
                            <View style={TeacherRegisterStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            email(Optional)
                            </Text>  
         
                         </View>
                                <View style={TeacherRegisterStyle.newTeacherError}>
                                    {this.state.emailError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.emailError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:1}} >

                                <TextInput
                                   style={[{fontFamily:'CircularStd-Book',textAlign:'right',marginTop:0},GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'},]}
                                   onChangeText={(email) => {
                                       this.validateEmail(email);
                                       this.setState({ email: email });
                                   }}
                                   placeholder={GlobalService.Register ? GlobalService.Register.RAPP_REGISTER_ENTER_EMAIL : "Enter email"} 
                                  placeholderTextColor="#0C222C"
                                  autoCapitalize="none"
                                  returnKeyType="next"
                                  value={this.state.email}
                                  underlineColorAndroid="#f000"
                                  blurOnSubmit={false}
                                     />
                            </View>
                             </View>
                          
                             <View style={TeacherRegisterStyle.SectionStyle}>
                  <View style={[TeacherRegisterStyle.SectionStyle, { width: "100%", position: "relative" }]}>
                                      
                    <View style={[TeacherRegisterStyle.profileTitleBox]}>
                        <View style={[TeacherRegisterStyle.profileTitle,{height:40}]}>
                          
                      <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',alignSelf: 'flex-end', fontWeight: "700",marginTop:3 }}>
                          Country
                      </Text>         
</View>
</View>
                       <View style={{width:"100%",'position':'relative',alignSelf:'flex-end'}} >
                           
             <SelectDropdown
              dropdownIconPosition ="right"
             data={this.state.countriesArray}
                                        
                    onSelect={(data) => {

                      
                        this.getStates(data.id);
                        this.setState({ selectedCountry: data.id });
                    }}
                    defaultValueByIndex={this.state.countryIndex}
             defaultValue={this.state.countriesArray[this.state.countryIndex]}
            // onSelect={(selectedItem, index) => {
            //   console.log(selectedItem, index);
            // }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                 <View style={styles.dropdownRowRightChildStyle}>
                   {selectedItem ? (
                    <View style={styles.dropdownRowRightChildStyle}>
                       <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} /> 

                                    
                                <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select country'}</Text>
                                <Image source={{ uri: selectedItem.image }} style={styles.dropdown3BtnImage} />

                   
                   
                        
                  </View>
                  ) : 
                  (
                    <View style={styles.dropdownRowRightChildStyle}>
                    
                    
                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select country'}</Text>
                        <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} /> 

                    </View>
                  )}
                  </View>
                
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdownRowRightChildStyle}>
                  
                 <Text style={styles.dropdown3BtnTxt}>{item.name}</Text>
                     <Image source={{ uri: item.image }} style={styles.dropdown3BtnImage} />
                                                                         
                </View>
              );}} />
           </View>
           <View style={[TeacherRegisterStyle.newStudentError,{width:"100%",justifyContent:"flex-start",top:5,right:0,left:0,alignSelf:'flex-start'}]}>
                {this.state.countryError ? 
            <Text style={[TeacherRegisterStyle.errorclass]}>{this.state.countryError}</Text>
            : null} 
            </View>
        </View>
     </View>


            <View style={TeacherRegisterStyle.SectionStyle}>
                         <View style={[TeacherRegisterStyle.SectionStyle, { width: "100%"}]}>
                          <View style={[TeacherRegisterStyle.profileTitleBox]}>
                                <View style={[TeacherRegisterStyle.profileTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',alignSelf: 'flex-end', fontWeight: "700",marginTop:3 }}>
                                         State
                                    </Text> 
                                
                                </View>
                                </View>
                       <View style={{width:"100%",alignItems:'flex-end'}} >
                       <SelectDropdown
            data={this.state.statesArray}
            onSelect={(data) => {
                this.setState({ selectedStates: data.id});
            }}
           
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (

                <View style={styles.dropdownRowRightChildStyle}>
                   {selectedItem ? (
                    <View style={styles.dropdownRowRightChildStyle}>
                       <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} /> 

                                    
                                <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select State'}</Text>
                                <Image source={{ uri: selectedItem.image }} style={styles.dropdown3BtnImage} />

                   
                   
                        
                  </View>
                  ) : 
                  (
                    <View style={styles.dropdownRowRightChildStyle}>
                    
                    
                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select State'}</Text>
                        <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} /> 

                    </View>
                  )}
                  </View>
                
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} />
                   
                  <Text style={styles.dropdown3RowTxt}>{item.name}s</Text>
                </View>
              );}} /> 
                            
                          </View>
                          <View style={[TeacherRegisterStyle.newStudentError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                             {this.state.stateError ? 
                          <Text style={[TeacherRegisterStyle.errorclass]}>{this.state.stateError}</Text>
                            : null} 
                          </View>
                         </View>

                         </View>   

{/* <View style={TeacherRegisterStyle.SectionStyle}>
 <View style={[TeacherRegisterStyle.SectionStyle, { width: "100%", position: "relative" }]}>
                        
     <View style={[TeacherRegisterStyle.profileTitleBox]}>
         <View style={[TeacherRegisterStyle.profileTitle,{height:40}]}>
            
        <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:3 }}>
            Country
        </Text> 
            
                                </View>
                                </View>
                       <View style={{width:"100%",'position':'relative'}} >
                           
             <SelectDropdown
              dropdownIconPosition ="right"
             data={this.state.countriesArray}
                                        
                    onSelect={(data) => {

                      
                        this.getStates(data.id);
                        this.setState({ selectedCountry: data.id });
                    }}
                   
            // data={countriesWithFlags}
             defaultValueByIndex={this.state.countryIndex}
             defaultValue={this.state.countriesArray[this.state.countryIndex]}
            // onSelect={(selectedItem, index) => {
            //   console.log(selectedItem, index);
            // }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                   {selectedItem ? (
                    <View style={styles.dropdown3BtnChildStyle}>
                     
                        <Image source={{ uri: selectedItem.image }} style={[TeacherRegisterStyle.userIcon,{borderRadius:12}]} />
                   
                   
                         <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select country'}</Text>
                         <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                     
                  </View>
                  ) : 
                  (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} />
                    
                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select country'}</Text>
                        <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                    
                    </View>
                  )}
                  </View>
                
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                   <Image source={{ uri: item.image }} style={styles.dropdown3BtnImage} />
                                                                           
                  <Text style={styles.dropdown3BtnTxt}>{item.name}</Text>
                </View>
              );}} />
           </View>

           <View style={[TeacherRegisterStyle.newTeacherError,{width:"100%",justifyContent:"flex-start",top:5,}]}>
                {this.state.countryError ? 
            <Text style={[TeacherRegisterStyle.errorclass]}>{this.state.countryError}</Text>
            : null} 
            </View>
        </View>
     </View>
     
  <View style={TeacherRegisterStyle.SectionStyle}>
                         <View style={[TeacherRegisterStyle.SectionStyle, { width: "100%"}]}>
                          <View style={[TeacherRegisterStyle.profileTitleBox]}>
                                <View style={[TeacherRegisterStyle.profileTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',alignSelf: 'flex-end', fontWeight: "700",marginTop:3 }}>
                                         State
                                    </Text> 
                                    <View style={[TeacherRegisterStyle.newTeacherError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                             {this.state.stateError ? 
                          <Text style={[TeacherRegisterStyle.errorclass]}>{this.state.stateError}</Text>
                            : null} 
                          </View>
                                </View>
                                </View>
                       <View style={{width:"100%"}} >
                       <SelectDropdown
            data={this.state.statesArray}
            onSelect={(data) => {
                this.setState({ selectedStates: data.id});
            }}
           
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (

               
                <View style={styles.dropdown3BtnChildStyle}>
                 
                 {selectedItem ? (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} />
                   
                         <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select State'}</Text>
                         <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                     
                  </View>
                  ) :  
                  (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} />
                    
                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select State'}</Text>
                        <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                    
                    </View>
                  )}

                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={TeacherRegisterStyle.userIcon} />
                   
                  <Text style={styles.dropdown3RowTxt}>{item.name}</Text>
                </View>
              );}} /> 
                            
                          </View>
                         </View>

                         </View>       */}
                                      

                             <View style={TeacherRegisterStyle.SectionStyle}>
                            <View style={TeacherRegisterStyle.studentTitleBox}>
                            <View style={TeacherRegisterStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            school(optional)
                            </Text>  
         
                         </View>
                                <View style={TeacherRegisterStyle.newTeacherError}>
                                    {this.state.schoolError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.schoolError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(school) => {
                                        this.setState({ school: school });
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
                             <View style={TeacherRegisterStyle.SectionStyle}>
                            <View style={TeacherRegisterStyle.studentTitleBox}>
                            <View style={TeacherRegisterStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            mobile(optional)
                            </Text>  
         
                         </View>
                                <View style={TeacherRegisterStyle.newTeacherError}>
                                    {this.state.mobileError ?
                                    <Text style={GlobalStyle.errorclass}>{this.state.mobileError}</Text>
                                    : null}
                                </View>
                            </View>
                                <View style={{width:"100%",'position':'relative',marginTop:6}} >

                                <TextInput
                                    style={[{fontFamily:'CircularStd-Book',textAlign:'right'},GlobalStyle.inputStyle,{backgroundColor:'#F9FAFB'}]}
                                    onChangeText={(mobile) => {
                                      this.setState({ mobile: mobile });
                                  }}
                                    placeholder="(406) 555-0120"
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    keyboardType='numeric'
                                   underlineColorAndroid="#f000"
                                    // selectionColor={"#fff"}
                                    blurOnSubmit={false}
                                     />
                            </View>
                             </View>

                             <View style={{ marginTop:30 ,marginLeft:'auto',marginBottom:10}}>
                                    <TouchableOpacity
                                        disabled={this.state.loading}
                                        style={[TeacherRegisterStyle.comnButtonStyle, { width: 100 }]}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                         this.goToNextBtn();
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

const styles = StyleSheet.create({
    // dashedSeparator:{
    //     width:'96%',
    //     height:2,
    //     marginTop:7,
    //     marginBottom:5,
    //     resizeMode: "cover",
    // },
    // dropdown3DropdownStyle: {backgroundColor: '#fff',border:12},
    // dropdown3RowStyle: {
    //   backgroundColor: '#fff',
    //   borderColor:"#F9FAFB",
    //   borderWidth:1,
    //   height: 50,
    // },
    // dropdown1SelectedRowStyle: 
    // {backgroundColor: '#fff'},
    // dropdown3BtnTxt: {
    //     color:'#0C222C',
    //     paddingHorizontal:15,
    //     paddingLeft:40,
    //     fontFamily:"CircularStd-Book",
    //     fontSize: 14,
    //    marginHorizontal: 12,
    //   },
    //   dropdown3BtnStyle: {
    //     width: '100%',
    //     height: 50,
    //     backgroundColor: '#fff',
    //     paddingHorizontal: 0,
    //     borderWidth: 1,
      
    //     borderRadius: 8,
    //     borderColor:"#F9FAFB",
    //   },
    //   dropdown3BtnImage: {width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10},
    //   dropdown3BtnChildStyle: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignSelf:'flex-end',
    //     fontFamily:"CircularStd-Book",
    //     alignItems: 'center',
    //     borderColor:"#F9FAFB",
    //     padding:0,
    //     colorL:"#0C222C"
       
    //   },
    //   dropdown3RowTxt: {
    //     fontFamily:"CircularStd-Book",
    //     fontSize: 14,
    //     color:'#0C222C',
    //     left:40
        
       
    //   },
    //   dropdown3RowChildStyle: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     color:'#2A3B69',
         
    //     paddingHorizontal: 18,
    //   },


    dashedSeparator:{
      width:'96%',
      height:2,
      marginTop:7,
      marginBottom:5,
      resizeMode: "cover",
  },
  dropdown3DropdownStyle: {backgroundColor: '#fff',border:12},
  dropdown3RowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color:'#2A3B69',
     
    paddingHorizontal: 18,
  },
  dropdown1SelectedRowStyle: {
    backgroundColor: '#fff'
  },
  dropdown3BtnTxt: {
      color:'#0C222C',
      paddingHorizontal:15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontFamily:"CircularStd-Book",
      fontSize: 14,
      right:0,
     
      marginHorizontal: 12,
    },
    dropdown3BtnStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      paddingHorizontal: 0,
      borderWidth: 1,
      alignSelf:'flex-end',
      borderRadius: 8,
      borderColor:"#F9FAFB",
    },
    dropdown3BtnImage: {width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10},
    dropdown3BtnChildStyle: {
      flex: 1,
      flexDirection: 'row',
      fontFamily:"CircularStd-Book",
      alignItems: 'center',
      borderColor:"#F9FAFB",
      justifyContent:'flex-start',
      padding:0,
      colorL:"#0C222C"
     
    },
    dropdown3RowTxt: {
      fontFamily:"CircularStd-Book",
      fontSize: 14,
      color:'#0C222C',
      left:40
    
    },
    dropdown3RowChildStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color:'#2A3B69',
       
      paddingHorizontal: 18,
    },
    dropdownRowRightChildStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color:'#2A3B69',
      
    },
  });