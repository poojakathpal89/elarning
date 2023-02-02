import React from 'react';
import {Text,Image,TouchableOpacity ,View,Button,ScrollView} from 'react-native';
import  MenuStyle  from '../menu/MenuStyle';
import GlobalStyle from "../../css/style";
import CommonStyle from '../../css/common';
import FooterComponent from '../../component/FooterComponent';



export default class MenuScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
      loading: false,
      secureTextEntry: true,
      errorPass:false
  };

  componentDidMount() {
      // console.log(StringsOfLanguages.languageObj);
  }
 
  menuNextBtn(){
    this.props.navigation.navigate("makegroups");
  }

  render() {
    return (
      <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#E7E2E2'}]}>
        <ScrollView>
        <View style={MenuStyle.container}>
        <View style={[MenuStyle.menuArea2]}>
      
      <View style={MenuStyle.logoOnlyHeader}>
              <Image
                  source={require("../../Image/text-title.png")}
                  style={{
                      width: 350,
                      height: 70,
                      resizeMode: "contain",
                      }}
                  />
          </View>
  
      
  
          </View>
          <View style={MenuStyle.newStudentText}>
      <Text  style={MenuStyle.newStudentTxt}>ABC-123</Text>
     
          </View>
          <View style={MenuStyle.btncontainer}>
          <View style={MenuStyle.buttonContainer}>
          <View  style={MenuStyle.buttonStyle}>
                    <Text style={MenuStyle.newStudentNextTxt}>print</Text>
                    </View>
                </View>
                <View style={MenuStyle.buttonContainer}>
                  <View  style={MenuStyle.buttonStyle}>
                  <TouchableOpacity
            disabled={this.state.loading}
                                          
              activeOpacity={0.5}
              onPress={() => {
                this.menuNextBtn();
              }} >
          <Text style={MenuStyle.newStudentNextTxt}>next</Text>
               {this.state.loading ? <ActivityIndicator color="white" style={{ marginLeft: 15 }} /> : null}
                </TouchableOpacity>
                   </View>
                </View>
                </View>
        
          </View>
         
  
        </ScrollView>
  
        </View>
  
    );
  }
}