import React from 'react';
import {Text,Image,TouchableOpacity,TextInput,Button, View,ScrollView} from 'react-native';
 import UserEditScreenStyle from './UserEditScreenStyle';
import { SettingPageHeaderComponent } from "../../component/AllComponent";
import GlobalStyle from "../../css/style";


export default class UserEditScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
  }


  render() {
      return (
      
    <View style={[UserEditScreenStyle.MainBody, { flex: 1,backgroundColor:'#FFFFFF'}]}>
       {/* <FooterComponent/> */}
       <SettingPageHeaderComponent props={this.props} />
      <ScrollView>
      <View style={UserEditScreenStyle.container}>
      <View style={[UserEditScreenStyle.profileImageCardBox]}>
                                <View style={{ alignItems: "center",marginTop:10 }}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.RBSheetPicker.open()}>
                                        
                                            <View
                                                style={[
                                                    { backgroundColor: this.state.colorId },
                                                    {
                                                        borderRadius: 100,
                                                        width: 130,
                                                        height: 70,
                                                        justifyContent: "center",
                                                        alignContent: "center",
                                                        alignItems: "center",
                                                    },]} >
                                                
                                            </View>
                                         
                                </TouchableOpacity>
                                <Text  style={{ color:'#000',fontSize:16, textAlign:'center',fontFamily:'CircularStd-Bold',width:'100%',}}>
                                 Your Nickname:
                                </Text>

                            <View style={UserEditScreenStyle.studentBtnArea }>
                                <View style={{alignSelf:'flex-end',marginEnd:40}}>
                            <Image source={require('../../Image/close-icon.png')}  style={UserEditScreenStyle.userIcon} />
                            </View>
                        <TextInput style = {UserEditScreenStyle.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "Pooja"
                                placeholderTextColor = "black"
                                textAlign='center'
                                autoCapitalize = "none"
                                keyboardType="numeric"
                                onSubmitEditing={() =>{this.props.navigation.navigate("newStudentCodeName");}}/>
                                
                        </View>

                                     <View style={{ flex: 1,alignItems: 'center',justifyContent: 'center',paddingLeft:20,paddingRight:20,marginTop:80}}>
  
                                    <Button color={"#708090"}

                                    title="Change"
                                    onPress={() => Alert.alert(
                                        'Its GeeksforGeeks !')}
                                />
</View>
      
                                     
             </View>
           </View>
      </View>      
 </ScrollView>

      </View>

      );
  }
}
