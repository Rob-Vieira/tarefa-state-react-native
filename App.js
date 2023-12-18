import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as StatusBarRN, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TasksProvider } from "./src/contexts/TasksContext";

import Contador from "./src/pages/Contador";
import Theme from "./src/Theme";
import Tasks from "./src/pages/Tasks";
import Menu from "./src/pages/Menu";
import TaskDetail from "./src/pages/TaskDetail";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TasksProvider>
      <NavigationContainer style={styles.container}>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Menu" screenOptions={screenOptions}>
          <Stack.Screen options={{ title: 'Home' }} name="Menu" component={Menu} />
          <Stack.Screen options={{ title: 'Clique até o fim' }} name="Contador" component={Contador} />
          <Stack.Screen options={{ title: 'Se organiza aí' }} name="Tasks" component={Tasks} />
          <Stack.Screen options={{ title: 'Se organiza aí' }} name="TaskDetail" component={TaskDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarRN.currentHeight,
    flex: 1,
    backgroundColor: Theme.bg,
    minHeight: Dimensions.get('window').height
  },
});

const screenOptions = {
  headerStyle: {
    backgroundColor: Theme.bg
  },
  headerTintColor: Theme.text,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}