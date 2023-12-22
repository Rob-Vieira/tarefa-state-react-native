import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Theme from "../theme/Theme";
import { useState } from "react";
import { useTaskContext } from "../contexts/TasksContext";
import { AntDesign } from '@expo/vector-icons';
import Styles from "../theme/Styles";

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
    <View style={[Styles.container, {position: 'relative'}]}>
      {
        !canEdit ?
          (
            <>
              <Text style={Styles.title} >{globalTasksData[id].text}</Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.list}
              >
                <View style={Styles.card}>
                  <Text style={Styles.text} >{globalTasksData[id].detail}</Text>
                </View>
              </ScrollView>
              <TouchableOpacity onPress={() => setCanEdit(true)} style={styles.editBtn}>
                <AntDesign name="edit" size={24} color={Theme.primaryText} />
              </TouchableOpacity>
            </>
          ) :
          (
            <>
              <Text style={Styles.label}>Título:</Text>
              <TextInput
                placeholder="Título da tarefa..."
                placeholderTextColor={Theme.text}
                value={text}
                onChangeText={handleText}
                style={Styles.input}
              />
              <Text style={Styles.label}>Descrição:</Text>
              <TextInput
                style={Styles.textInput}
                multiline
                //numberOfLines={4} // Defina o número desejado de linhas visíveis inicialmente
                placeholder="Digite seu texto aqui..."
                value={detail}
                onChangeText={(newText) => setDetail(newText)}
                placeholderTextColor={Theme.text}
                textAlignVertical="top"
              />
              <TouchableOpacity onPress={editTask} style={Styles.btn}>
                <Text style={Styles.btnText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCanEdit(false)} style={Styles.btnG}>
                <Text style={Styles.btnGText}>Cancelar</Text>
              </TouchableOpacity>
            </>
          )

      }
    </View>
  );
}

const styles = StyleSheet.create({
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
  }
});