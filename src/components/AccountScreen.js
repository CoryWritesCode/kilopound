import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import GoTo from '../buttons/Navigate';
import { COLORS } from '../styles/global';
import { getData } from '../utils/AsyncStorage';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  account: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BGCOLOR,
  },
  title: {
    color: COLORS.FONT_COLOR
  }
});

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: 'X'
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: ''
    };
  }

  willFocus = async () => {
    let user = await getData('user');
    if (user === null) {
      this.props.navigation.navigate('UserInfo');
    }
  }

  render() {
    return (
      <View style={styles.account}>
        <NavigationEvents onWillFocus={this.willFocus} />
        <Text style={styles.title}>Account Screen</Text>
        <GoTo title="Go to Home" navigate="Home" />
        <GoTo title="Go to Challenges" navigate="Challenges" />
      </View>
    );
  }
}

AccountScreen.propTypes = {

};