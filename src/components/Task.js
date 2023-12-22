import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Theme from "../theme/Theme";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Task({ checked = false, text = '', checkPress, remPress, showDetailPress }) {
  return (
    <TouchableWithoutFeedback onPress={checkPress}>
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
          <TouchableOpacity onPress={showDetailPress} style={styles.btn}>
            <FontAwesome5 name="eye" size={18} color={Theme.primaryText} />
          </TouchableOpacity>
          <TouchableOpacity onPress={remPress} style={styles.btn}>
            <FontAwesome5 name="trash-alt" size={18} color={Theme.primaryText} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
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
