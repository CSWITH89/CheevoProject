import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

const Wrapper = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // width: SCREEN_WIDTH * 0.88,
    alignSelf: 'center',
  },
});

export default Wrapper;
