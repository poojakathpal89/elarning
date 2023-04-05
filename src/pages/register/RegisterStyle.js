import { StyleSheet } from "react-native";

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
    },
    input: {
        borderWidth: 0,
        alignItems: 'center',
        height:50,
      width:"210%",
        borderRadius:50,
       marginLeft:60,
       fontSize:20,
       fontWeight:"500",
       marginRight:60,
        flexDirection: 'row',
        justifyContent: 'center',
        // borderColor:'red',borderWidth:1,
        alignItems: 'center',
        backgroundColor:"#FFFFFF"
     },
    SectionStyle:{
        position: "relative",
        backgroundColor:" #E0E0E0",
        marginTop:10,
        },
    mainContainer: {
        width: "150%",
    },
    studentTitle: {
        height: 40,
        width:"50%",
         fontFamily:'CircularStd-Bold',
        
       
      },
    studentTitleBox:{
        height:40,
        width:"100%",
        flexDirection:"row",
        flex:1,
        
      },
    innerContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    salashImage: {
        width: "75%",
        height: 180,
        resizeMode: "contain",
    },
    welcomeText: {
        color: "#FF9A32",
        justifyContent: "center",
        fontSize: 25,
    },
    healthText: {
        color: "#fff",
        justifyContent: "center",
        fontSize: 27,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    activityIndicator: {
        alignItems: "center",
        height: 80,
    },
    buttonLayout:{
        marginTop:50,
         },
         BtnArea: {
            width: "100%",
            height:"20%",
            bottom:20,
            marginTop:150,
            alignItems:"center",
          
            flex:1,
               },
               studentBtnArea:{
                width: "70%",
                height: 54,
                alignItems:"center",
                justifyContent:"center",
             marginTop:70,
                },
              loginbtn:{
                backgroundColor:"#FFFFFF",
            borderColor:"#FFFFFF",
            },
            comnButtonStyle: {    
                borderWidth: 0,
                alignItems: 'center',
                height:50,
                width:"100%",
                borderRadius:50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                 },
                 loginbtnTxt:{
                    color: 'black',
                 fontSize:30,
                  },
                  commonBtnTxt:{
                    fontSize:20,
                    fontFamily:'CircularStd-Bold',
                  },
                  signupBtnTxt:{
                    color:"black",
                 fontSize:30,
                 fontFamily:'CircularStd-Bold',
                    
                  },
                  teacherBtnArea:{
                   width: "70%",
                    height: 54,
                    marginTop:20,
                    alignItems:"center",
                    marginBottom:10,
                       },
                       registerError: {
                        width:"50%",
                        height: 80,
                        justifyContent:"flex-end",
                        right:0,
                         },
                         newTeacherError: {
                            width:"50%",
                            height: 55,
                            marginTop:15,
                            justifyContent:'center',
                            alignItems:'center',
                           borderWidth:1,
                           borderColor:'red',
                          
                             },
                         errorclass: { color: "red", marginLeft: 0, marginTop: 10, minWidth:250,
                         marginBottom: 15,height:60,borderColor:'red',borderRadius:50,borderWidth:1 },

});

export default RegisterStyle;
