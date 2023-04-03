import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const NewStudentStyle = StyleSheet.create({
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
        },
        errorclass: { color: "red", 
        fontSize:12, marginLeft: 0,
         marginTop: 0, 
         alignSelf:'flex-start',
         marginBottom: 5 },

      menuCardBox:{
        borderRadius:10,
        shadowColor:'#40B2E7',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 8,
        marginBottom:20,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        width:'100%',
        padding: 20
      },
      currencyList:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom:15,
        borderBottomWidth:1,
        borderStyle: 'dashed',
        paddingBottom:15,
        borderBottomColor: "#D3D3D3",
      },
      SectionStyle:{
        position: "relative",
         marginTop:10,
        
        },
        studentTitleBox:{
          height:40,
          width:"100%",
        },  
             studentTitle: {
              height: 80,
              width:"50%",
              alignSelf:"flex-end",
               fontFamily:'CircularStd-Bold',
               }, 
               comnButtonStyle: {
                backgroundColor: '#F3F4F6',
                borderWidth: 0,
                color: '#F3F4F6',
                borderColor: '#F3F4F6',
                alignItems: 'center',
                borderRadius: 20,
                marginHorizontal:4,
                borderRadius: 20,
                paddingHorizontal: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height:50
              },
              userIcon:{
                position:'absolute',
                width: 20,
                height: 20,
                marginTop:15,
                zIndex:999,
                left:"4%",
              },
              newStudentError: {
                width:"50%",
                height: 40,
                alignSelf:'flex-start',
                justifyContent:"flex-end",
                right:0,
                left:0,
                 },

});

export default NewStudentStyle;