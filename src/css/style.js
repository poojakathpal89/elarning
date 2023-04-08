'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

MainBody: {
  flex: 1,
  position:'relative',
  backgroundColor:'#E0E0E0'
},
authArea:{
  width:'100%',
  paddingVertical: 30,
  paddingHorizontal: 15,
},
eyeIcon:{
  position:'absolute',
  right:-5,
  top:38,
  fontSize:18,
  width: 40,
  height: 40,
  color:'#3EB881'
},
// eyeIcon:{
//   position:'absolute',
//   left: "16.67%",
//   right: "16.67%",
//   top: "25%",
//   bottom: "25%",
// },
 heartIcon:{
  position:'absolute',
  color: '#fff',
  bottom:10,
  right:10,
  zIndex:999,
  fontSize:20,
  shadowColor:'#40B2E7',
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 8,
},
inputStyle: {
  flex: 1,
  color: '#2A3B69',
  borderWidth: 1,
  fontStyle:'normal',
  borderColor: '#F9FAFB',
  backgroundColor:'#FFFFFF',
   borderRadius:8,
  paddingHorizontal:15,
  height:40
},
inputStyleError: {
  flex: 1,
  color: '#2A3B69',
  borderWidth: 1,
  borderColor: 'red',
  backgroundColor:'#F6F6F7',
  borderRadius:8,
  paddingHorizontal:15,
  height:48,
  paddingLeft:40
},
errorTextStyle: {
  color: 'red',
  textAlign: 'center',
  fontSize: 14,
},
errorclass: { color: "red", marginLeft: 0, marginTop: 5, marginBottom: 5 },
bottomNav:{
  width: '100%',
  paddingHorizontal:30,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
shadowOpacity: 0.58,
shadowRadius: 16.00,
elevation: 24,
  // borderTopLeftRadius:32,
  // borderTopRightRadius:32,
  position:'absolute',
  bottom:0,
  alignSelf:'flex-end',
  zIndex:999,
  justifyContent:'space-around',
  flexDirection:'row'
},
bottomNavItem:{
  alignItems:'center',
  paddingVertical:22,
  position:'relative',

},
bottomNavRightItem:{
  alignItems:'center',
  paddingVertical:20,
  position:'relative',
  alignItems:'center',
  borderLeftWidth:1,
  borderColor:'#ccc'
},
bottomNavLeftItem:{
  alignItems:'center',
  paddingVertical:22,
  position:'relative',
  alignItems:'center',
  borderColor:'#ccc',

},

bottomNavActiveVector:{
  alignItems:'center',
  width:'100%',
  height:4,
  backgroundColor:'gery',
  position:'absolute',
  top:0,
  borderRadius:10,
  zIndex:9999
},
bottomNavIcon:{
  width:20,
  height:24,
  resizeMode:'contain',
  marginBottom:8
},
bottomNavText:{
  fontSize:16,
  fontWeight:'700',
  color:'gery',
  marginTop:10,
  marginRight:20
},
bottomNavTextActive:{
  fontSize:16,
  fontWeight:'700',
  color:'grey',
alignItems:'center',
  justifyContent:'center',
},
avatarSelected:{
  borderWidth:1,
}
});