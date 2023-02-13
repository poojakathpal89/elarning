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
                                <View style={{ alignItems: "center",marginTop:50 }}>
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

                                <View style={UserEditScreenStyle.SectionStyle}>
                                    <View style={UserEditScreenStyle.profileTitleBox}>
                                    <View style={UserEditScreenStyle.profileTitle}>

                                    <Text style={{ fontSize: 16, color: "#0C222C",fontFamily:'CircularStd-Bold', fontWeight: "700",marginTop:3 }}>
                                    </Text> 
                                
                                        </View>
                                        <View style={UserEditScreenStyle.profileError}>
                                            {this.state.nameError ?
                                            <Text style={GlobalStyle.errorclass}>{this.state.nameError}</Text>
                                            : null}
                                        </View>
                                    </View>
                                        <View style={{width:"100%",'position':'relative'}} >
                                        <TextInput
                                            style={[{fontFamily:'CircularStd-Book'},this.state.nameError  ? GlobalStyle.inputStyleError :GlobalStyle.inputStyle,{backgroundColor:'#fff'}]}
                                            onChangeText={(name) => {
                                                this.setState({ name: name });
                                            }}
                                            placeholder="Pooja"
                                            placeholderTextColor="#8b9cb5"
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                            value={this.state.name}
                                            underlineColorAndroid="#f000"
                                            blurOnSubmit={false}
                                             />
                                    </View>
                                     </View>

                                     <View style={UserEditScreenStyle.btnContainer}>
  
                                    <Button style={{backgroundColor:'transparent'}}

                                    title="Geeks"
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
