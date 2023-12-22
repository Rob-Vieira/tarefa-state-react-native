import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Theme from "../theme/Theme";
import { useState } from "react";
import { useTaskContext } from "../contexts/TasksContext";

export default function Tasks({ navigation }) {
  const {globalTasksData, setGlobalTasksData} = useTaskContext();

  const cloneTasks = () => globalTasksData.map((t) => t);

  const newTask = (text) => {
    if (text == "") return false;

    let newTasks = cloneTasks();

    newTasks.push({
      text: text,
      checked: false,
      detail: 'Texto de teste só para encher mesmo.'
    });

    setGlobalTasksData(newTasks);
  };

  const removeTask = (index) => {
    let newTasks = cloneTasks();

    newTasks.splice(index, 1);

    setGlobalTasksData(newTasks);
  };

  const checkTask = (index) => {
    let newTasks = cloneTasks();

    newTasks[index].checked = !newTasks[index].checked;

    setGlobalTasksData(newTasks);
  };

  return (
    <View style={styles.container}>
      <AddTask addPress={newTask} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {globalTasksData.map((t, i) => (
          <Task
            key={i + "_task"}
            text={t.text}
            checked={t.checked}
            remPress={() => removeTask(i)}
            checkPress={() => checkTask(i)}
            showDetailPress={() => navigation.navigate({name: 'TaskDetail', params: { id: i }})}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 25,
    gap: 25,
    flex: 1,
    backgroundColor: Theme.bg
  },
  list: {
    flexGrow: 1,
    gap: 20,
  },
});
