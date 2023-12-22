import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as StatusBarRN, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TasksProvider } from "./src/contexts/TasksContext";
import { ContadorProvider } from "./src/contexts/ContadorContext";

import Contador from "./src/screens/Contador";
import Theme from "./src/theme/Theme";
import Tasks from "./src/screens/Tasks";
import Menu from "./src/screens/Menu";
import TaskDetail from "./src/screens/TaskDetail";
import Cadastro from "./src/screens/Cadastro";
import Cadastrados from "./src/screens/Cadastrados";
import Noticias from "./src/screens/Noticias";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TasksProvider>
      <ContadorProvider>
        <NavigationContainer style={styles.container}>
          <StatusBar style="light" />
          <Stack.Navigator initialRouteName="Menu" screenOptions={screenOptions}>
            <Stack.Screen options={{ title: 'Home' }} name="Menu" component={Menu} />
            <Stack.Screen options={{ title: 'Só clicar' }} name="Contador" component={Contador} />
            <Stack.Screen options={{ title: 'Se organiza aí' }} name="Tasks" component={Tasks} />
            <Stack.Screen options={{ title: 'Se organiza aí' }} name="TaskDetail" component={TaskDetail} />
            <Stack.Screen options={{ title: 'Chega mais' }} name="Cadastro" component={Cadastro} />
            <Stack.Screen options={{ title: 'Chega mais' }} name="Cadastrados" component={Cadastrados} />
            <Stack.Screen options={{ title: 'Se informe' }} name="Noticias" component={Noticias} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContadorProvider>
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