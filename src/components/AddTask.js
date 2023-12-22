import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Theme from "../theme/Theme";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function AddTask({addPress = ()=>{}}) {
  const [text, setText] = useState("");

  const handleText = (newText) => {
    setText(newText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título da tarefa..."
        placeholderTextColor={Theme.text}
        value={text}
        onChangeText={handleText}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => { setText(''); addPress(text); }} style={styles.btn}>
        <FontAwesome5 name="plus" size={40} color={Theme.primaryText} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.bgSecondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderRadius: 4,
    height: 90
  },
  input: {
    backgroundColor: Theme.bg,
    color: Theme.text,
    flex: 3,
    height: '100%',
    fontSize: 20,
    padding: 10,
    borderRadius: 4
  },
  btn: {
    backgroundColor: Theme.primary,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  btnText: {
    color: Theme.primaryText,
    fontSize: 50,
    lineHeight: 55,
    fontWeight: 'bold'
  }
});
