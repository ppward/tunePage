import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../Account";
import TabScreens from "./BottomTabScreen";
const Stack = createNativeStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="Tab" component={TabScreens} />
    </Stack.Navigator>
  );
}
