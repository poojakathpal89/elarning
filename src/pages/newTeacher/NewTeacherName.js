import React from 'react';
import { Text,Image,Button,TextInput,ScrollView, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 import NewTeacherNameStyle from './NewTeacherNameStyle';
 import GlobalStyle from "../../css/style";
 import CommonStyle from '../../css/common';
 import ButtonStyle from "../../css/button";
 import DropdownMenu from '../../react-native-dropdown-menu';
 import SelectDropdown from 'react-native-select-dropdown';
 import { default as FontAwesome, default as Icon } from "react-native-vector-icons/FontAwesome";
//  import { default as FontAwesome, default as Icon } from "react-native-vector-icons/FontAwesome";
import { AuthService, GlobalService, RequestHandler, ToastService } from "../../services/AllServices";





export default class NewTeacherName extends React.Component {
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

  goToNextBtn(){
     //this.props.navigation.navigate("chooseAvtar");
        this.props.navigation.navigate("newStudentTwo");
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
            ToastService.tostShort(error);
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
        
            <View style={[NewTeacherNameStyle.authArea,{  }]}>
                <View style={[NewTeacherNameStyle.menuCardBox]}>

                              <View style={NewTeacherNameStyle.SectionStyle}>
                            <View style={NewTeacherNameStyle.studentTitleBox}>
                            <View style={NewTeacherNameStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            nickname
                            </Text>  
         
                         </View>
                                <View style={NewTeacherNameStyle.profileError}>
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
                             <View style={NewTeacherNameStyle.SectionStyle}>
                            <View style={NewTeacherNameStyle.studentTitleBox}>
                            <View style={NewTeacherNameStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            email(Optional)
                            </Text>  
         
                         </View>
                                <View style={NewTeacherNameStyle.profileError}>
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
                          


<View style={NewTeacherNameStyle.SectionStyle}>
 <View style={[NewTeacherNameStyle.SectionStyle, { width: "100%", position: "relative" }]}>
                        
     <View style={[NewTeacherNameStyle.profileTitleBox]}>
         <View style={[NewTeacherNameStyle.profileTitle,{height:40}]}>
            
        <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:3 }}>
            Country
        </Text> 
            <View style={[NewTeacherNameStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                {this.state.countryError ? 
            <Text style={[NewTeacherNameStyle.errorclass]}>{this.state.countryError}</Text>
            : null} 
            </View>
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
                     
                        <Image source={{ uri: selectedItem.image }} style={[NewTeacherNameStyle.userIcon,{borderRadius:12}]} />
                   
                   
                         <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select country'}</Text>
                         <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                     
                  </View>
                  ) : 
                  (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={NewTeacherNameStyle.userIcon} />
                    
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
        </View>
     </View>
     
  <View style={NewTeacherNameStyle.SectionStyle}>
                         <View style={[NewTeacherNameStyle.SectionStyle, { width: "100%"}]}>
                          <View style={[NewTeacherNameStyle.profileTitleBox]}>
                                <View style={[NewTeacherNameStyle.profileTitle,{height:40}]}>
            
                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold',alignSelf: 'flex-end', fontWeight: "700",marginTop:3 }}>
                                         State
                                    </Text> 
                                    <View style={[NewTeacherNameStyle.profileError,{width:"100%",justifyContent:"flex-start",top:5}]}>
                             {this.state.stateError ? 
                          <Text style={[NewTeacherNameStyle.errorclass]}>{this.state.stateError}</Text>
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
                      <Image source={require("../../Image/arrow_down.png")} style={NewTeacherNameStyle.userIcon} />
                   
                         <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.name : 'Select State'}</Text>
                         <FontAwesome name="chevron-down" color={'#3eb881'} size={12} style={ {left:100}} />
                     
                  </View>
                  ) :  
                  (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Image source={require("../../Image/arrow_down.png")} style={NewTeacherNameStyle.userIcon} />
                    
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
                      <Image source={require("../../Image/arrow_down.png")} style={NewTeacherNameStyle.userIcon} />
                   
                  <Text style={styles.dropdown3RowTxt}>{item.name}</Text>
                </View>
              );}} /> 
                            
                          </View>
                         </View>

                         </View>      
                                      

                             <View style={NewTeacherNameStyle.SectionStyle}>
                            <View style={NewTeacherNameStyle.studentTitleBox}>
                            <View style={NewTeacherNameStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            school(optional)
                            </Text>  
         
                         </View>
                                <View style={NewTeacherNameStyle.profileError}>
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
                             <View style={NewTeacherNameStyle.SectionStyle}>
                            <View style={NewTeacherNameStyle.studentTitleBox}>
                            <View style={NewTeacherNameStyle.studentTitle}>

                           <Text style={{ fontSize: 16, color: "#000000",fontFamily:'CircularStd-Bold', alignSelf: 'flex-end',fontWeight: "700",marginTop:6,}}> 
                            mobile(optional)
                            </Text>  
         
                         </View>
                                <View style={NewTeacherNameStyle.profileError}>
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
                                        style={[NewTeacherNameStyle.comnButtonStyle, { width: 100 }]}
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
    dashedSeparator:{
        width:'96%',
        height:2,
        marginTop:7,
        marginBottom:5,
        resizeMode: "cover",
    },
    dropdown3DropdownStyle: {backgroundColor: '#fff',border:12},
    dropdown3RowStyle: {
      backgroundColor: '#fff',
      borderColor:"#F9FAFB",
      borderWidth:1,
      height: 50,
    },
    dropdown1SelectedRowStyle: 
    {backgroundColor: '#fff'},
    dropdown3BtnTxt: {
        color:'#0C222C',
        paddingHorizontal:15,
        paddingLeft:40,
        fontFamily:"CircularStd-Book",
        fontSize: 14,
       marginHorizontal: 12,
      },
      dropdown3BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        borderWidth: 1,
      
        borderRadius: 8,
        borderColor:"#F9FAFB",
      },
      dropdown3BtnImage: {width: 24, height:24, resizeMode: 'contain',borderColor:"#F9FAFB",borderWidth:1,borderRadius:10},
      dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        alignSelf:'flex-end',
        fontFamily:"CircularStd-Book",
        alignItems: 'center',
        borderColor:"#F9FAFB",
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        color:'#2A3B69',
         
        paddingHorizontal: 18,
      },
  });