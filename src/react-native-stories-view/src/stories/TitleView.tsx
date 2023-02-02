import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { WHITE, GREEN, TINT_GRAY } from '../utils/colors'; 
import { TitleProps  } from '../utils/interfaceHelper';
import ProgressiveImage from "./ProgressiveImage";
const TitleView = (props: StoryViewProps) => {

  return ( 
  
    <View style={styles.parentStyle}>
      
      
      <View style={styles.verticalStyle}>
        <Text style={styles.titleStyle}>{props.title[props.progressIndex]}</Text> 
       
      </View>
    </View>
  );
};

export default TitleView;

const styles = StyleSheet.create({
  parentStyle: {
   
    top: 0,
    left: 0, 
    right:0,
    marginTop: '5%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start', 
  
    paddingBottom: '3%'
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2
  },
  descStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: WHITE,
    marginTop: 5,  
  },
 
  verticalStyle: {
    flexDirection: 'column',
    marginLeft: '4%',
    justifyContent: 'center',
    width:'70%'
  },
  
});
