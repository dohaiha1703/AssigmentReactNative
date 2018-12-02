import React from 'react';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ContactScreen from './screens/Contact';
import DetailScreen from './screens/DetailScreen';
import SplashScreen from './screens/SplashScreen';
import ListScreen from './screens/ListNews';
import MobileScreen from './screens/Mobile';
import LiveScreen from './screens/Live';
import TechScreen from './screens/Tech';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      header: null,
    },
  },
  Mobile: {
    screen: MobileScreen,
  },
  Tech: {
    screen: TechScreen,
  },
  Live: {
    screen: LiveScreen,
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null,
    },
  },
  Detail: {
    screen: DetailScreen,
  },
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      header: null,
    },
  },

},
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}


