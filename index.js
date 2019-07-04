/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';

NativeTachyons.build(
	{
		rem: 20,
		fontRem: 18
	},
	StyleSheet
);

AppRegistry.registerComponent(appName, () => App);
