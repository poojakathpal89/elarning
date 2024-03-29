import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const GroupStudentStyle = StyleSheet.create({
    container: {
        flex: 1, 
        position: "relative",
        paddingHorizontal: 24,
        paddingVertical: 24,
      },
      logoOnlyHeader:{
		height:"10%",
		alignItems: "center",
		marginTop:30,
        },

        btnTextContainer:{
            marginTop:30,
        },
    commonStudentBtnTxt:{
        fontSize:16,
        fontFamily:'CircularStd-Bold',
        alignItems:"center"
      },
    studentTxt:{
        color: 'black',
      fontSize:14,
      alignItems:"flex-start",
      justifyContent:"flex-start",

    },
    ListHead:{
marginTop:40,
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
            marginTop:20,
            textAlign:"center",
            fontSize:30,
            color:"#000000",
            fontWeight:'700',
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
       height:40,
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
        fontSize:30,
        fontWeight:'700',
        color:"#000000",
 fontFamily:'CircularStd-Bold',
        },
        newStudentTitle:{
          fontSize:30,
          fontWeight:"400",
          color:"#000000"
        },
        newStudentContainer:{
          alignItems:"flex-start",
          justifyContent:"flex-start",
          marginTop:30,
          
        },
        newGroupList:{
          flexDirection:'row',
          alignItems: 'center',
          justifyContent:'space-between',
        marginTop:30,
        
         
        },
        gpStuName:{
          color:'#0C222C',
          fontSize:16,
          fontWeight:'500',
          justifyContent:'flex-start',
          fontFamily:'CircularStd-Bold',
          width:210,
          opacity:0.6,
        },
});

export default GroupStudentStyle;