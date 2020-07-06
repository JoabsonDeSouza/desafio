import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '~/pages/Splash';
import Main from '~/pages/Main';
import Details from '~/pages/Details';
import Login from '~/pages/Login';

const navigationOptions = {
  headerShown: false,
  headerBackTitle: ' ',
};

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions,
  },
  Main: {
    screen: Main,
    navigationOptions,
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: '#FFFFFF',
      headerTitle: navigation.getParam('film').original_title.toUpperCase(),
      headerBackTitle: ' ',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: 'black',
      },
    }),
  },
});

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      AppNavigator,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);

export default Routes;
