import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../Theme";

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Contador')}
            >
                <Text style={styles.btnText}>
                    Contador
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Tasks')}
            >
                <Text style={styles.btnText}>
                    ToDo
                </Text>
            </TouchableOpacity>
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
        height: 80,
        backgroundColor: Theme.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        paddingHorizontal: 20
    },
    btnText: {
        color: Theme.primaryText,
        fontSize: 32,
        fontWeight: "bold"
    },
    textCont: {
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