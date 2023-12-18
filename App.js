import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as StatusBarRN, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Contador from "./src/pages/Contador";
import Theme from "./src/Theme";
import Tasks from "./src/pages/Tasks";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="light" />
      {/* <Contador /> */}
      {/* <Tasks /> */}
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen options={{ title: 'Clique até o fim' }} name="Contador" component={Contador} />
        <Stack.Screen options={{ title: 'Se organiza aí' }} name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarRN.currentHeight,
    flex: 1,
    backgroundColor: Theme.bg,
    minHeight: Dimensions.get('window').height,
  },
});