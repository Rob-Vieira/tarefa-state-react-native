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
  const [text, setText] = useState(globalTasksData[id].text);

  const handleText = (newText) => {
    setText(newText);
  }

  const cloneTasks = () => globalTasksData.map((t) => t);

  const editTask = () => {
    let newTasks = cloneTasks();

    newTasks[id].detail = detail;
    newTasks[id].text = text;

    setGlobalTasksData(newTasks);
    setCanEdit(false);
  }

  return (
    <View style={styles.container}>
      {
        !canEdit ?
          (
            <>
              <Text style={styles.title} >{globalTasksData[id].text}</Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
              >
                <Text style={styles.text} >{globalTasksData[id].detail}</Text>
              </ScrollView>
              <TouchableOpacity onPress={() => setCanEdit(true)} style={styles.editBtn}>
                <AntDesign name="edit" size={24} color={Theme.primaryText} />
              </TouchableOpacity>
            </>
          ):
          (
            <>
              <Text style={styles.label}>Título:</Text>
              <TextInput
                placeholder="Título da tarefa..."
                placeholderTextColor={Theme.text}
                value={text}
                onChangeText={handleText}
                style={styles.input}
              />
              <Text style={styles.label}>Descrição:</Text>
              <TextInput 
                style={styles.textInput}
                multiline
                //numberOfLines={4} // Defina o número desejado de linhas visíveis inicialmente
                placeholder="Digite seu texto aqui..."
                value={detail}
                onChangeText={(newText) => setDetail(newText)}
                placeholderTextColor={Theme.text}
                textAlignVertical="top"
              />
              <TouchableOpacity onPress={ editTask } style={styles.btn}>
                <Text style={styles.btnText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => setCanEdit(false) } style={styles.btnG}>
                <Text style={styles.btnGText}>Cancelar</Text>
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.text
  },
  input: {
    backgroundColor: Theme.bgSecondary,
    color: Theme.text,
    padding: 15,
    borderRadius: 4
  },
  list: {
    flexGrow: 1,
    gap: 20,
    paddingBottom: 70
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
    textAlign: 'center',
    color: Theme.primaryText,
  },
  btnG: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Theme.primary
  },
  btnGText: {
    textAlign: 'center',
    color: Theme.primary,
  },
  textInput: {
    backgroundColor: Theme.bgSecondary,
    borderRadius: 4,
    color: Theme.text,
    padding: 15,
    flex: 1
  }
});
