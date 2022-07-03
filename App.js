import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Onboard from './components/OnBoard';
import Home from './components/Home';

const App = () => {
  const [showOnboard, setShowOnboard] = React.useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {showOnboard && (
          <Onboard
            goToHomepage={() => {
              setShowOnboard(false);
            }}
          />
        )}
        {!showOnboard && (
          <Home
            goToOnboard={() => {
              setShowOnboard(true);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;
