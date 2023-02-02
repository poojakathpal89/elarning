'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView, Animated, Easing, StyleSheet,useNativeDriver} from 'react-native';
import PropTypes from 'prop-types';

class DropdownMenu extends Component {

  constructor(props, context) {
    super(props, context);
console.log("props",props)
    
    this.state = {
      activityIndex: -1,
      selectIndex: (props.selectIndex>0)?props.selectIndex:0,
      rotationAnims: props.data.map(() => new Animated.Value(0))
  };

    this.defaultConfig = {
      bgColor: '#3eb881',
      tintColor: '#3eb881',
      activityTintColor: "red",
      arrowImg: require('../Image/arrow_down.png'),
      checkImage: require('./img/menu_check.png')
    };

  }

  renderChcek(index, title) {
    var activityIndex = this.state.activityIndex;
    if (this.state.selectIndex[activityIndex] == index) {
      var checkImage = this.props.checkImage ? this.props.checkImage : this.defaultConfig.checkImage;
      return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 15, flexDirection: 'row',zIndex:9999}} >
   
        <View style={{width:"80%"}} >
            <Text
      style={[
        styles.item_text_style,
        this.props.optionTextStyle,
        {color: this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor}
    ]} >
      {title.name}
    </Text>
    </View><View style={{width:"80%"}} >
      <Image
      source={checkImage}
      style={{tintColor: this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor}} />
   
   </View>

    </View>
    );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 15, flexDirection: 'row',zIndex:9999}} >
    <Text style={[
        styles.item_text_style,
        this.props.optionTextStyle,
        {color: this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor}
    ]} >{title.name}</Text>
      </View>
    );
    }
  }

  renderActivityPanel() {
    if (this.state.activityIndex >= 0) {

      var currentTitles = this.props.data;

      var heightStyle = {};
      if (this.props.maxHeight && this.props.maxHeight < currentTitles.length * 44) {
        heightStyle.height = this.props.maxHeight;
      }

      return (
        <View style={{position: 'absolute', left: 0, right: 0, top: 40, bottom: 0,zIndex:9999,}}>
    <TouchableOpacity onPress={() => this.openOrClosePanel(this.state.activityIndex)} activeOpacity={1} style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
    <View style={{opacity: 0.4, backgroundColor: 'black', flex: 1 }} />
    </TouchableOpacity>

      <ScrollView style={[{position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white',borderTopColor:'grey'}, heightStyle]} >
      {
        currentTitles.map((title, index) =>
        <TouchableOpacity key={title.id} activeOpacity={1} style={{flex: 1, height: 44}} onPress={this.itemOnPress.bind(this, title.id)} >
        {this.renderChcek(index, title)}
      <View style={{backgroundColor: '#F6F6F6', height: 1, marginLeft: 15}} />
      </TouchableOpacity>
      )
      }
    </ScrollView>
      </View>
    );
    } else {
      return (null);
    }
  }

  openOrClosePanel(index) {

    this.props.bannerAction ? this.props.bannerAction() : null;

    // var toValue = 0.5;
    if (this.state.activityIndex == index) {
      this.closePanel(index);
      this.setState({
        activityIndex: -1,
      });
      // toValue = 0;
    } else {
      if (this.state.activityIndex > -1) {
        this.closePanel(this.state.activityIndex);
      }
      this.openPanel(index);
      this.setState({
        activityIndex: index,
      });
      // toValue = 0.5;
    }
    // Animated.timing(
    //   this.state.rotationAnims[index],
    //   {
    //     toValue: toValue,
    //     duration: 300,
    //     easing: Easing.linear
    //   }
    // ).start();
  }

  openPanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0.5,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  closePanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  itemOnPress(index) {
   
    if (this.state.activityIndex > -1) {
     
      this.setState({
        selectIndex: index
      });
      
      if (this.props.handler) {
        this.props.handler(index, index);
      }
    }
    this.openOrClosePanel(this.state.activityIndex);
  }

  renderDropDownArrow(index) {
    var icon = this.props.arrowImg ? this.props.arrowImg : this.defaultConfig.arrowImg;
    return (
      <TouchableOpacity
      activeOpacity={1}
      onPress={this.openOrClosePanel.bind(this, index)}
      key={index}
      style={{flex: 1, height: 38, alignItems:"flex-start", justifyContent: "center",}} >
      <Animated.Image
    source={icon}
    style={{
      width:10,
        height:10,
        top:5,
       right:0,
        tintColor: "#3eb881",
        transform: [{
        rotateZ: this.state.rotationAnims[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      }]
    }} />
    </TouchableOpacity>
  );
  }

  render() {

    return (
      <View style={{flexDirection: 'column', flex: 1,zIndex:9999,}} >
  <View style={{
      flexDirection: 'row',zIndex:9999,position:'relative',
        backgroundColor: this.props.bgColor ? this.props.bgColor : this.defaultConfig.bgColor}} >
    { console.log(this.state.selectIndex) }
    {
      this.props.data.map((rows, index) =>

     
      (this.state.selectIndex == rows.id ?
      <TouchableOpacity
          activeOpacity={1}
          onPress={this.openOrClosePanel.bind(this, index)}
          key={index}
          style={{flex: 1, height: 38, alignItems:"flex-start", justifyContent: "center",paddingLeft:16}} >
            <View style={[{flexDirection: 'row'}]}>
              <View style={[{flexDirection: 'row', alignItems: "center", width:"80%"}]} >
                  <Text
                    style={[ 
                      styles.title_style,
                      this.props.titleStyle,
                      {color: (index === this.state.activityIndex) ?
                        (this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor)
                        :
                        (this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor)}
                  ]} >
                    {rows.name}
                  </Text>
              </View>
          </View>
    </TouchableOpacity>:null)
    )
    }
    <View style={{width:"20%"}}>
      
      {this.renderDropDownArrow(0)}
      </View>
  </View>
    {this.props.children}

    {this.renderActivityPanel()}

  </View>
  );
  }

}
 
DropdownMenu.propTypes = {
  bgColor: PropTypes.string,
  tintColor: PropTypes.string,
  activityTintColor: PropTypes.string,
  arrowImg: PropTypes.number,
  checkImage: PropTypes.number,
  data: PropTypes.array,
  bannerAction: PropTypes.func,
  optionTextStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  maxHeight: PropTypes.number
}

const styles = StyleSheet.create({
  title_style: {
    fontSize: 14,
  
    
  },
  item_text_style: {
    color: '#333333',
    fontSize: 14,
  },
  fullWidth:{
    width:"80%"
  },
  lessWidth:{
    width:"80%"
  }
});

export default DropdownMenu;
