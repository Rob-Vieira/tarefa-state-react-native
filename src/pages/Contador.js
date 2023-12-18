import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../Theme";
import { useState } from "react";

export default function Contador({ navigation }) {
    const [cont, setCont] = useState(0);

    const addCont = () => setCont(cont + 1);
    const remCont = () => setCont(cont - 1);

  return (
    <View style={styles.container}>
      <View style={styles.textCont}>
        <Text style={styles.text}>{cont}</Text>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity onPress={addCont} style={styles.btn}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={remCont} style={styles.btn}>
          <Text style={styles.btnText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    backgroundColor: Theme.bg
  },
  btnCont: {
    flexDirection: "row",
    gap: 20,
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
  textCont:{
    backgroundColor: Theme.bgSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    overflow: 'scroll',
    borderRadius: 4
  },
  text: {
    fontSize: 80,
    color: Theme.text,
    fontWeight: "bold",
  },
});
