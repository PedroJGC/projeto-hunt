import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
  })
);

export default Routes;