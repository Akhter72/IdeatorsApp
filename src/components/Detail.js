import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Detail = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailHeader}>{props.detailLabel}</Text>
      <Text style={styles.detail}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailHeader: {
    fontSize: 18,
    color: '#858597',
    fontWeight: '500',
  },
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  detail: {
    fontSize: 15,
    color: '#1F1F39',
    fontWeight: '400',
  },
});

export default Detail;
