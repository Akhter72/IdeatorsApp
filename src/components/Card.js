import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = (props, {navigation}) => {
  const {label, description, bgColor, color, image} = props;
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.left}>
        <Text style={[styles.label, {color: color}]}>{props.label}</Text>
        <Text style={[styles.description, {color: color}]}>
          {props.description}
        </Text>
      </View>
      <View style={styles.right}>
        <Image source={image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
  },
  right: {
    paddingRight: 15,
    paddingTop: 13,
  },
  left: {
    width: '60%',
    paddingTop: 13,
    paddingLeft: 18,
  },
  label: {
    fontSize: 21,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  description: {},
});

export default Card;
