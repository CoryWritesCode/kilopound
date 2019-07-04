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
import { COLORS } from '../globals/styles';
import { WEIGHTS } from '../globals/system';
import NativeTachyons from 'react-native-style-tachyons';

const styles = StyleSheet.create({
  home: {
    backgroundColor: COLORS.BGCOLOR,
  },
  weightContainer: {
    height: '75%',
  }
});

function HomeScreen() {
  const [total, setTotal] = useState(0);
  const [isBritish, setIsBritish] = useState(false);

  let metric = isBritish ? 'kg' : 'lbs';
  let weights = isBritish ? WEIGHTS.KILOGRAMS : WEIGHTS.POUNDS;


  return (
    <SafeAreaView cls='flx-i' style={styles.home}>
      <View cls='flx-i pt2' style={styles.home}>
        <StatusBar barStyle="light-content" />
        <View cls='flx-row flx-wrap jcc asc w5' style={styles.weightContainer}>
          {weights.map((weight) => <AddWeight key={weight} amount={weight} handlePress={() => setTotal(total + weight)} />)}
        </View>
        <View cls='flx-wrap flx-row jcsa aic'>
          <View>
            <Text cls='ph3 pv2 mv1' style={{ color: COLORS.FONT_COLOR }}>Total:</Text>
            <Text cls='ph3' style={{ color: COLORS.FONT_COLOR }}>{total} {metric}</Text>
          </View>
          <View cls='jcc aic'>
            <Text cls='ph3 pv2 mv1' style={{ color: COLORS.FONT_COLOR }}>Change Metric</Text>
            <Switch
              trackColor={{ false: COLORS.PRIMARY, true: COLORS.PRIMARY }}
              onValueChange={() => setIsBritish(!isBritish)}
              value={isBritish}
              thumbColor={COLORS.FONT_COLOR}
            />
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity cls='ba br2 ph3 pv2 mh3 mv1 asc' style={{ borderColor: COLORS.PRIMARY }} onPress={() => setTotal(0)}>
            <Text style={{ color: COLORS.PRIMARY }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NativeTachyons.wrap(HomeScreen);