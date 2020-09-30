import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList118370Navigator from '../features/ArticleList118370/navigator';
import ArticleList118369Navigator from '../features/ArticleList118369/navigator';
import ArticleList118368Navigator from '../features/ArticleList118368/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList118370: { screen: ArticleList118370Navigator },
ArticleList118369: { screen: ArticleList118369Navigator },
ArticleList118368: { screen: ArticleList118368Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
