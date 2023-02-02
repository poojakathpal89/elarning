import { StyleSheet } from "react-native";

const StudentStyle = StyleSheet.create({
    authArea:{
        width:'100%',
        height:'100%',
        paddingVertical: 24,
        paddingHorizontal:24,
        flex:1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:"blue"
       },  
       logoOnlyHeader:{
		height:"10%",
		alignItems: "center",
	}, 
    comnButtonStyle: {
        backgroundColor: 'red',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: 'red',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal:4,
        borderRadius: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50
      },
      comnButtonTextStyle: {
        color: 'yellow',
        fontSize: 16,
      }, 
    authBox:{
     padding:20,
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius:12,
        marginTop:500,
        shadowColor:'#FFFFFF',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
      },
      SectionStyle:{
        position: "relative",
         marginTop:40,
        },
        studentTitleBox:{
            height:40,
            width:"100%",
            flexDirection:"row",
            flex:1,
               },  
               studentTitle: {
                height: 40,
                width:"50%",
                 fontFamily:'CircularStd-Bold',
                 },  
                 studentError: {
                    width:"50%",
                       height: 40,
                       justifyContent:"flex-end",
                       right:0,
                       },
                       userIcon:{
                        position:'absolute',
                        width: 20,
                        height: 20,
                        marginTop:15,
                        zIndex:999,
                        left:"4%",
                      },

                      MainBody: {
                        flex: 1,  
                      },
                   

                      studentImageCardBox:{
                        borderRadius:12,
                        shadowColor:'black',
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        elevation: 8,
                        marginBottom:24,
                        backgroundColor:'#fff',
                        justifyContent:'space-between',
                        width:'100%',
                        padding: 20
                      },
                      

                      backgroundColor:'rgba(202,202,202,0.6)',
                      width: "100%",
                      height: "100%",
                      opacity: 0.4,
                       position:'absolute',
                       right:0,
                      bottom:0}
                      );