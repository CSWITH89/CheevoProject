import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NBCardImage from '../../components/cards/NBCardImage';
import Carousel from '../../components/carousel/Carousel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        // style={{marginHorizontal: 20}}
      > */}
        <Carousel />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
