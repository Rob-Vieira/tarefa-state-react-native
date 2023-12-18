import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Theme from "../Theme";
import { useState } from "react";

export default function Tasks({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const cloneTasks = () => tasks.map((t) => t);

  const newTask = (text) => {
    if (text == "") return false;

    let newTasks = cloneTasks();

    newTasks.push({
      text: text,
      checked: false,
    });

    setTasks(newTasks);
  };

  const removeTask = (index) => {
    let newTasks = cloneTasks();

    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  const checkTask = (index) => {
    let newTasks = cloneTasks();

    newTasks[index].checked = !newTasks[index].checked;

    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <AddTask addPress={newTask} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {tasks.map((t, i) => (
          <Task
            key={i + "_task"}
            text={t.text}
            checked={t.checked}
            remPress={() => removeTask(i)}
            checkPress={() => checkTask(i)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          height: 80,
          backgroundColor: Theme.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
        onPress={() => navigation.navigate('Contador')}
      >
        <Text
          style={{ 
            color: Theme.primaryText, 
            fontSize: 32, 
            fontWeight: "bold" 
          }}
        >
          Contador
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    padding: 15,
    paddingBottom: 25,
    gap: 25,
    flex: 1,
  },
  list: {
    flexGrow: 1,
    gap: 20,
  },
});
