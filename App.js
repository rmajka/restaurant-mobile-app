import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShowScreen: ResultShowScreen,
  },

  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Screen",
    },
  }
);

export default createAppContainer(navigator);
/*this is a navigation and entry point*/
