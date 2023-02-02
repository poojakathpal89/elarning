import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import  TextStyle  from '../../pages/usertest/TestStyle';
import GlobalStyle from "../../css/style";


const TestScreen = () => {
  return (
    <View style={[GlobalStyle.MainBody, { flex: 1,backgroundColor:'#CACACA'}]}>
      <ScrollView>
      <View style={TextStyle.container}>
      <View style={[TextStyle.menuArea2]}>
      <View style={[TextStyle.menuCardBox,{}]}>
  <View style={TextStyle.languagesBox}>
  <View style={TextStyle.languagesList}>
    <Text >Student Data</Text>
   
        </View>

    </View>
    </View>
    <View style={[TextStyle.menuCardBox,{}]}>
  <View style={TextStyle.languagesBox}>
  <View style={TextStyle.languagesList}>
    <Text >Teacher Data</Text>
    </View>

    </View>
    </View>

        </View>
        </View>

      </ScrollView>

      </View>

  );
};
export default TestScreen;