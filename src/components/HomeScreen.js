import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Switch
} from 'react-native';
import { AddWeight } from '../buttons';
import { COLORS, DIMENSIONS } from '../styles/global';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#2D2F32'
  },
  title: {
    height: '7%',
    color: COLORS.FONT_COLOR,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: DIMENSIONS.MAX_WIDTH * 0.06,
    alignSelf: 'center'
  },
  resetBtn: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'center'
  },
  content: {
    color: COLORS.FONT_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5
  },
  weightContainer: {
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  totalContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  switchContainer: {
    justifyContent: 'center'
  }
});

export default function HomeScreen() {
  const [total, setTotal] = useState(0);
  const [isBritish, setIsBritish] = useState(false);
  let metric = isBritish ? 'kg' : 'lbs';

  const pounds = [
    1.1,
    2.2,
    3,
    4.5,
    5.5,
    11,
    22,
    33,
    44,
    55
  ];

  const kilograms = [
    0.5,
    1,
    1.5,
    2,
    2.5,
    5,
    10,
    15,
    20,
    25
  ];

  let weights = isBritish ? kilograms : pounds;

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.home}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.weightContainer}>
          {weights.map((weight) => <AddWeight key={weight} look={styles.content} amount={weight} handlePress={() => setTotal(total + weight)} />)}
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.content}>Total: {total} {metric}</Text>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: COLORS.PRIMARY, true: COLORS.PRIMARY }}
              onValueChange={() => setIsBritish(!isBritish)}
              value={isBritish}
              thumbColor={COLORS.FONT_COLOR}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.resetBtn} onPress={() => setTotal(0)}>
          <Text style={{ color: styles.resetBtn.borderColor }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {

};
