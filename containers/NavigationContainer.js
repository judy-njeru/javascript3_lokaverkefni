import { StackNavigator } from 'react-navigation'
import HomeScreenContainer from './HomeScreenContainer'
import HopkaupScreen from './HopkaupScreen'
import AhaScreen from './AhaScreen'

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
    Hopkaup: { screen: HopkaupScreen },
    Aha: { screen: AhaScreen },
  },
  {
    initialRouteName: 'Home',
  },
);
