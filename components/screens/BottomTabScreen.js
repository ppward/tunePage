import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
const Tabs = createBottomTabNavigator();

export default function TabScreens() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
}
