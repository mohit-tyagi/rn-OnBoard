import {StatusBar, Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import colours from '../assets/colors/colours';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../assets/images/1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../assets/images/2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('../assets/images/3.png'),
  },
];

const OnBoard = ({goToHomepage}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slides}>
        <Image style={styles.img} source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.doneBtn}>
        <Text>Done</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.prevBtn}>
        <Text>Prev</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextBtn}>
        <Text>Next</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={goToHomepage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.white,
    // backgroundColor: 'red',
  },
  img: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 24,
    color: colours.black,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 57,
    marginRight: 57,
    marginTop: 22,
    marginBottom: 22,
  },
  text: {
    fontSize: 14,
    color: colours.gray,
    textAlign: 'center',
    fontWeight: '400',
    marginLeft: 30,
    marginRight: 30,
  },
  doneBtn: {
    width: 40,
    height: 40,
    marginRight: 20,
    color: colours.blue,
    justifyContent: 'center',
  },
  nextBtn: {
    width: 40,
    height: 40,
    marginRight: 20,
    color: colours.blue,
    justifyContent: 'center',
  },
  prevBtn: {
    width: 40,
    height: 40,
    marginLeft: 20,
    color: colours.blue,
    justifyContent: 'center',
  },
  dotStyle: {
    backgroundColor: colours.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colours.blue,
  },
});

export default OnBoard;
