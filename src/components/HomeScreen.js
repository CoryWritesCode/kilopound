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
    backgroundColor: '#2D2F32',
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
          {weights.map((weight) => <AddWeight key={weight} look={styles.btnContent} amount={weight} handlePress={() => setTotal(total + weight)} />)}
        </View>
        <View cls='flx-wrap flx-row jcsa aic'>
          <View>
            <Text style={styles.content}>Total:</Text>
            <Text style={styles.totalContent}>{total} {metric}</Text>
          </View>
          <View cls='jcc aic'>
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

export default NativeTachyons.wrap(HomeScreen);