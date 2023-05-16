import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Feature = props => {
  const {headline, imgName} = props;
  const a = "illustration.png";
  var imgUrl = '../img/' + a;
  return (
    <View style={styles.featureContainer}>
      <View style={styles.left}>
        <Text style={styles.headline}>{headline}</Text>
        <TouchableOpacity style>
          <Text style={styles.view}>view</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Image source={imgName} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureContainer: {
    backgroundColor: '#CEECFE',
    width: 270,
    height: 139,
    margin: 5,
    borderRadius: 15,
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'black',
    marginRight: 20,
  },
  left: {
    alignItems: 'center',
    margin: 5,
    width: 180,
  },
  right: {
    right: 20,
  },
  headline: {
    flex: 1,
    width: '90%',
    padding: 3,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  view: {
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    padding: 4,
    marginBottom: 10,
  },
});

export default Feature;
