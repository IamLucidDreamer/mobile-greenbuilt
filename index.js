import { AppRegistry } from 'react-native';
import App from './App';
import { slug as appName } from './app.json';
import 'core-js/features/url';

AppRegistry.registerComponent(appName, () => App);