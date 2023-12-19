import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../Theme";

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de exercícios</Text>
                <Text style={styles.subtitle}>Tarefas idealizadas usando o ChatGPT, com o intutito de melhor compreensão e pratica do uso dos 'States' no react native.</Text>
            </View>
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
        padding: 15,
        gap: 25,
        backgroundColor: Theme.bg
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.bgSecondary,
        padding: 15,
        borderRadius: 4,
        marginBottom: 10
    },
    title: {
        fontSize: 32,
        color: Theme.primaryText,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Theme.text,
        marginTop: 10
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