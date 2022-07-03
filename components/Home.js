import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colours from '../assets/colors/colours';

const Home = ({goToOnboard}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text onPress={goToOnboard} style={styles.text}>
          Click here for On-Board
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colours.blueFaded,
    borderRadius: 15,
  },
  text: {
    color: colours.white,
    padding: 10,
  },
});

export default Home;
