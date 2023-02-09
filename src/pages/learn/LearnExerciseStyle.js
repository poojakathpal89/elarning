import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const LearnExerciseStyle = StyleSheet.create({
    container: {
        flex: 1, 
        position: "relative",
        paddingHorizontal: 24,
        paddingVertical: 24,
      },
      multipleCodeImage2Container: {
        justifyContent: 'center',
           marginLeft:90,
           marginRight:90,
           backgroundColor:"#FBFEFD",
           alignItems:"center",   
           marginTop:10,
           height:60,
           borderRadius:10,
               },
      logoOnlyHeader:{
		height:"10%",
		alignItems: "center",
		marginTop:30,
        },
        exerciseOneImage:{
            height:"10%",
            alignItems: "center",
            marginTop:0,
            textAlign:'center',
            justifyContent:"center"
         },

starImage:{
    justifyContent: 'center',
    marginLeft:80,
    marginRight:80,
    backgroundColor:"#FBFEFD",
    alignItems:"center",
    paddingLeft:40,
    paddingRight:40,    
    marginTop:20,
    height:50,
    borderRadius:10,
  
 
},
        btnTextContainer:{
            // marginTop:30,
            marginBottom:40
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

        makeGroupText:{
           alignItems:"center",
            marginTop:100,
            textAlign:"center",
            fontSize:20,
            color:"#000000",
            fontWeight:'500',
           fontFamily:'CircularStd-Bold',
},
      btncontainer: {
       flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,  
        justifyContent:"center",   
    },
    buttonContainer: {
       
        justifyContent: 'center',
        marginLeft:50,
        marginRight:50,
        backgroundColor:"#FBFEFD",
        alignItems:"center",
      paddingLeft:40,
      paddingRight:40,
        marginTop:20,
        height:50,
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
    newStudentTxt:{
    color:"#000000",
    fontSize:30,
    fontWeight:'400',
    fontStyle:"normal"
   
    },
    newStudentNextTxt:{
        color:"#000000",
        fontSize:30,
        fontWeight:'400',
        color:"#000000",
 fontFamily:'CircularStd-Bold',
        },
        studentCodeTxt:{
            color:"#000000",
            fontSize:20,
            fontWeight:'500',
            color:"#000000",
     fontFamily:'CircularStd-Bold',
            },
  
            studentCodeContainer: {
             justifyContent: 'center',
                marginLeft:90,
                marginRight:90,
                backgroundColor:"#FBFEFD",
                alignItems:"center",
                paddingLeft:50,
                paddingRight:50,    
                marginTop:20,
                height:80,
                borderRadius:10,
                    },
studentButtonStyle:{
 height:50,
    color:"black",
    alignItems:"center",
    justifyContent:"center"
},
studentButtonStyle:{
    height:50,
       color:"black",
       alignItems:"center",
       justifyContent:"center"
   },
   studenttitleCreate:{
    alignItems:"center",
     textAlign:"center",
    fontSize:15,
    color:"#000000",
    fontWeight:'400',
   fontFamily:'CircularStd-Bold',
   },
   createStuContainer:{
    marginTop:30,
   },
   createContainer:{
    marginTop:60,
    justifyContent: 'center',
    marginLeft:50,
    marginRight:50,
    backgroundColor:"#FBFEFD",
    alignItems:"center",
    paddingLeft:40,
    paddingRight:40,    
    height:50,
    borderRadius:10,
   },
   starImage2:{
    justifyContent: 'center',
    marginLeft:80,
    marginRight:80,
    backgroundColor:"#FBFEFD",
    alignItems:"center",
    paddingLeft:40,
    paddingRight:40,    
    marginTop:10,
    height:50,
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    
   },
   image2Container:{
    flex:2,
    flexDirection:'row',
   },
   bottomswiperHeadingBox: {

    alignItems: "center",
   
},
bottomswiperHeading: {
  fontSize: 18,
  color: "#0C222C",
  fontWeight: "700",
  marginBottom:10
},
bottomswiperSubheading: {
  fontSize: 16,
  fontWeight: "500",
  color: "#0C222C",
},
shareWithFrndBg:{
  flex:1,
  flexDirection:'row',
  fontSize: moderateScale(14), 
  color: "#3EB881",
  marginBottom:10,
  justifyContent: "center",
  alignContent:"center",
  fontWeight: "500",
  marginTop:10
},
shareTicketTextStyle:{
  color: '#000',
  fontSize: 20,
  fontFamily:'CircularStd-Book',
  fontWeight:'500'
},
});

export default LearnExerciseStyle;