'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

	topLeftBg:{
	  position:'absolute',
	  width:"100%",
	  height:"60%",
	  left:0,
	  top:0,
	  opacity:1,
	  //filter:blur('55px'),
	},
	topRightBg:{
	  
		position: 'absolute',
		width: "100%",
		height:"60%",
		right:0,
		top: 0,
		opacity: 1,
	 	position:'absolute',
	 	right:0,
		top:0,
	 
	},
	topLeftInnerBg:{
		position:'absolute',
		width:"100%",
		height:170,
		left:0,
		top:0,
		opacity:1,
		//filter:blur('55px'),
	  },
	  topLeftInnerBgWelcome:{
		position:'absolute',
		width:"100%",
		height:150,
		left:0,
		top:0,
		opacity:1,
		//filter:blur('55px'),
	  },
	  topRightInnerBg:{
		
		  width: "100%",
		  height:"60%",
		  opacity: 1,
		   position:'absolute',
		   right:0,
		  top:0,
	   
	  },
	whiteDullbg:{
		backgroundColor:'rgba(224,224,224,0.6)',
		width: "100%",
		height: "100%",
		opacity: 0.4,
	 	position:'absolute',
	 	right:0,
		bottom:0,
	},
	fullbg:{
		
		width: "100%",
		height: "100%",
		opacity: 1,
	 	position:'absolute',
		borderWidth:1,
		top:-30,
	 	
	},
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
      backgroundColor:"#CACACA",
	 
	},
	container:{
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
	tabcontainer:{
		width:'100%',
		height:'100%',
		
		flex:1,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	   
	  },
	  tabContentArea:{
		
		backgroundColor:'rgba(224,224,224,0.2)',
		paddingTop:20
	  },
	 
	logoOnlyHeader:{
		height:"10%",
		alignItems: "center",
		marginTop:50,
		
	},
	contentFormsArea:{
		height:"40%",
		flexGrow: 3,
		marginBottom:250
	},
	BtnArea: {
        width: "100%",
        height:"20%",
    	bottom:20,
		flex:1,
		
      
    },
	detailArrow:{
		backgroundColor:'#3EB881',
		height:22,
		width:22,
		borderRadius:11,
		alignItems:"center",
		justifyContent:"center",
		
	},
	detailArrowImage:{
		width:10,
		height:10,
		resizeMode:'contain',
		
		
		
	},
	viewDetailText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#3EB881",
        position:'absolute',
        paddingRight:30
       }
	   ,
	   trendImage:{
		backgroundColor:'#3EB881',
		height:22,
		width:22,
		borderRadius:15,
		alignItems:"center",
		justifyContent:"center",paddingLeft:3,paddingTop:2,marginLeft:10
		
	},greentrendImage:{
		backgroundColor:'#3EB881',
		height:22,
		width:22,
		borderRadius:15,
		alignItems:"center",
		justifyContent:"center",marginLeft:10
	}
	,redtrendImage:{
		backgroundColor:'red',
		height:22,
		width:22,
		borderRadius:15,
		alignItems:"center",
		justifyContent:"center",marginLeft:10
	},
	   upTrend:{width:15,
		height:15,
		resizeMode:'contain',},
		
	
      
      commonButtonStyle: {    
        borderWidth: 0,
        alignItems: 'center',
        height:50,
        width:"100%",
        borderRadius:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
		fontSize:16,
        fontFamily:'CircularStd-Bold',
		color: '#FFFFFF',
		backgroundColor:"#000"
      },
	  mainbgColor: {
		backgroundColor:'rgba(224,224,224,0.4)'
	  }
})