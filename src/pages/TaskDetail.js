import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Theme from "../Theme";
import { useState } from "react";
import { useTaskContext } from "../contexts/TasksContext";
import { AntDesign } from '@expo/vector-icons';

export default function TaskDetail({ navigation, route }) {
  const { globalTasksData, setGlobalTasksData } = useTaskContext();
  const { id } = route.params;

  const [detail, setDetail] = useState(globalTasksData[id].detail);
  const [canEdit, setCanEdit] = useState(false);

  const cloneTasks = () => globalTasksData.map((t) => t);

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{globalTasksData[id].text}</Text>

      {
        canEdit ?
          (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
              >
                <Text style={styles.text} >{globalTasksData[id].detail}</Text>
              </ScrollView>
              <TouchableOpacity style={styles.editBtn}>
                <AntDesign name="edit" size={24} color={Theme.primaryText} />
              </TouchableOpacity>
            </>
          ):
          (
            <>
              <TextInput 
                style={styles.textInput}
                multiline
                numberOfLines={4} // Defina o número desejado de linhas visíveis inicialmente
                placeholder="Digite seu texto aqui..."
                value={detail}
                onChangeText={(newText) => setDetail(newText)}
              />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Salvar</Text>
              </TouchableOpacity>
            </>
          )
        
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 25,
    gap: 25,
    flex: 1,
    backgroundColor: Theme.bg,
    position: 'relative'
  },
  list: {
    flexGrow: 1,
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Theme.text
  },
  text: {
    color: Theme.text
  },
  editBtn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: Theme.primary,
    borderWidth: 2,
    borderColor: Theme.primary + '70'
  },
  btn: {
    backgroundColor: Theme.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  btnText: {
    color: Theme.primaryText,
  },
});
