import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Theme from "../Theme";

export default function Task({ checked = false, text = '', checkPress, remPress }) {
  return (
    <View style={[styles.container, checked && styles.containerChecked]}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 1 }}
      >
        <Text style={[styles.text, checked && styles.textChecked]}>
          {text}
        </Text>
      </ScrollView>
      <View style={styles.btns}>
        <TouchableOpacity onPress={checkPress} style={styles.btn}>
          {/* <Text style={styles.btnText}>✔️</Text> */}
          <Text style={styles.btnText}>O</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={remPress} style={styles.btn}>
          {/* <Text style={styles.btnText}>✖️</Text> */}
          <Text style={styles.btnText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    // width: '100%',
    backgroundColor: Theme.bgSecondary,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  containerChecked: {
    borderLeftWidth: 4,
    borderLeftColor: Theme.primary,
  },
  text: {
    color: Theme.text,
    fontSize: 18,
    fontWeight: "600",
  },
  textChecked: {
    textDecorationLine: "line-through",
    color: Theme.primary,
  },
  btns: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Theme.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  btnText: {
    color: Theme.primaryText,
    fontSize: 18,
    fontWeight: "bold",
    // lineHeight: 20,
  },
});
