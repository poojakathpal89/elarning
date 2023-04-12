import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const ChooseAvtarStyle = StyleSheet.create({
    container: {
        flex: 1, 
        position: "relative",
        paddingHorizontal: 24,
        paddingVertical: 24,
      },
      chopseAvtarOnlyHeader:{
		height:"10%",
		alignItems: "center",
		marginTop:90,
        },
    commonStudentBtnTxt:{
        fontSize:16,
        fontFamily:'CircularStd-Bold',
        alignItems:"center"
      },
    studentTxt:{
        color: 'black',
      fontSize:14
    },
      menuArea:{

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          paddingTop:24

      },
      logoBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop:24
    },
    returnIcon: {
      width: 40,
      height: 40,        
      backgroundColor:'#3EB881',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
     
  },userImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 100,

},
      menuCardBox:{
        borderRadius:24,
        shadowColor:'#40B2E7',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
        marginBottom:20,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        width:'100%',
        padding: 20,
        marginTop:40,
      },
      menuListBox:{
        flexDirection:'row',
        alignItems: 'center',
        borderBottomColor:'#E5E7EB',
        borderBottomWidth:1,
        paddingBottom:15,
        marginBottom: 15,
        width:'100%'
      },
      comnMenuText:{
        color:'#A7A9AC',
        fontSize:16,
        fontWeight:'600',
        fontFamily:'CircularStd-Bold',
        marginLeft:8
      },
      menuIcon:{
        width:24,
        height:24,
        resizeMode:'contain'
      },
      languagesList:{
        width:100,
        flexDirection:'row',
       textAlign:'center',
        justifyContent:'space-between',
        marginBottom:15,
        paddingBottom:15,
        },

        newStudentText:{
           alignItems:"center",
            marginTop:100,
            textAlign:"center",
            fontSize:50,
            fontWeight:'600',
            fontStyle:"bold",
            fontFamily:'CircularStd-Bold',

        },
     
  
      btncontainer: {
        flex: 1,
       flexDirection: 'row',
        alignItems: 'center',
        marginTop:30,     
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft:40,
        marginRight:40,
        backgroundColor:"#FBFEFD",
       
        height:60,
        borderRadius:10,
        marginBottom:60
       
        // borderWidth:1,
        
    },
    buttonStyle:{
       
        height:100,
        color:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    newStudentTxt:{
    color:"#000000",
    fontSize:30,
    fontWeight:'400',
    fontStyle:"normal"
   
    },
    newStudentNextTxt:{
        color:"#000000",
        fontSize:22,
        fontWeight:'700',
        fontFamily:'CircularStd-Bold',
        },
        chooseAvatarImage: {
            width:43,
            height: 43,
            margin:4
            // resizeMode: 'contain',
            
            /// backgroundColor:'red'
        },
        bottomswiperHeadingBox: {
          // borderBottomWidth: 1,
          // borderStyle: "dashed",
          // borderColor: "#D1D5DB",
          alignItems: "center",
       
          paddingBottom: 5,
      },
      bottomswiperHeading: {
        fontSize: 18,
        fontWeight: "700",
        color: "#0C222C",
        fontFamily:'CircularStd-bold',
        marginTop:10
       
    },
    btncontainer: {
      flexDirection: 'row',
       alignItems: 'center',
       marginTop:10,  
       justifyContent:"center",   
   },
   
    chooseAvatarBox: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 20,
  },
  chooseAvatarImage: {
    width:88,
    height: 70,
    margin:4
    // resizeMode: 'contain',
    
    /// backgroundColor:'red'
},
dashedSeparator:{
  width:'96%',
  height:2,
  marginTop:3,
  marginBottom:5,
  resizeMode: "cover",
},
starImage:{
  justifyContent: 'center',
  marginLeft:80,
  marginRight:80,
  backgroundColor:"#FBFEFD",
  alignItems:"center",
  paddingLeft:10,
  paddingRight:10,    
  marginTop:10,
  height:90,
  borderRadius:10,
},
buttonStyle:{
  height:20,
   color:"black",
   alignItems:"center",
   justifyContent:"center",
   flex:1,
   flexDirection:'row',
},
chooseAvatarBox: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: 20,
},
chooseAvatarImage: {
  width: 70,
  height: 70,
  // resizeMode: 'contain',
  marginBottom: 5,
  /// backgroundColor:'red'
},
});

export default ChooseAvtarStyle;