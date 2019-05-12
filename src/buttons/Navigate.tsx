import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

type GoToProps = {
  navigation: any,
  title: string,
  navigate: string
}

class GoTo extends React.Component<GoToProps> {
  render() {
    return <Button title={this.props.title} onPress={() => { this.props.navigation.navigate(this.props.navigate) }} />;
  }
}

export default withNavigation(GoTo);