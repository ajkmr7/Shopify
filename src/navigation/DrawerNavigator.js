// Libraries
import { createDrawerNavigator } from "@react-navigation/drawer";

// Constants
import ROUTES from "../constants/routes";

// Screens
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;