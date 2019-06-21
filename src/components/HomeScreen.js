import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  SafeAreaView
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
  container: {
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

export default function HomeScreen() {
  const [total, setTotal] = useState(0);
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.home}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.container}>
          <AddWeight look={styles.content} ammount={10} handlePress={() => setTotal(total + 10)} />
          <AddWeight look={styles.content} ammount={20} handlePress={() => setTotal(total + 20)} />
          <AddWeight look={styles.content} ammount={30} handlePress={() => setTotal(total + 30)} />
          <AddWeight look={styles.content} ammount={40} handlePress={() => setTotal(total + 40)} />
          <AddWeight look={styles.content} ammount={50} handlePress={() => setTotal(total + 50)} />
          <AddWeight look={styles.content} ammount={60} handlePress={() => setTotal(total + 60)} />
          <AddWeight look={styles.content} ammount={70} handlePress={() => setTotal(total + 70)} />
          <AddWeight look={styles.content} ammount={80} handlePress={() => setTotal(total + 80)} />
          <AddWeight look={styles.content} ammount={90} handlePress={() => setTotal(total + 90)} />
          <AddWeight look={styles.content} ammount={100} handlePress={() => setTotal(total + 100)} />
        </View>
        <Text style={styles.content}>Total: {total}</Text>
        <TouchableOpacity style={styles.resetBtn} onPress={() => setTotal(0)}>
          <Text style={{ color: styles.resetBtn.borderColor }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {

};
