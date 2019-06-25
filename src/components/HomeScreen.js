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
import { COLORS, DIMENSIONS } from '../globals/styles';
import { WEIGHTS } from '../globals/system';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#2D2F32',
    paddingTop: 20
  },
  resetBtn: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
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
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center'
  },
  totalContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalContent: {
    paddingHorizontal: 20,
    color: COLORS.FONT_COLOR
  },
  btnContent: {
    color: COLORS.FONT_COLOR,
    width: 50,
    height: 45,
    alignItems: 'center'
  }
});

export default function HomeScreen() {
  const [total, setTotal] = useState(0);
  const [isBritish, setIsBritish] = useState(false);

  let metric = isBritish ? 'kg' : 'lbs';
  let weights = isBritish ? WEIGHTS.KILOGRAMS : WEIGHTS.POUNDS;


  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.home}>
        <StatusBar barStyle="light-content" />
        <View style={styles.weightContainer}>
          {weights.map((weight) => <AddWeight key={weight} look={styles.btnContent} amount={weight} handlePress={() => setTotal(total + weight)} />)}
        </View>
        <View style={styles.totalContainer}>
          <View>
            <Text style={styles.content}>Total:</Text>
            <Text style={styles.totalContent}>{total} {metric}</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.content}>Change Metric</Text>
            <Switch
              trackColor={{ false: COLORS.PRIMARY, true: COLORS.PRIMARY }}
              onValueChange={() => setIsBritish(!isBritish)}
              value={isBritish}
              thumbColor={COLORS.FONT_COLOR}
            />
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity style={styles.resetBtn} onPress={() => setTotal(0)}>
            <Text style={{ color: styles.resetBtn.borderColor }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}