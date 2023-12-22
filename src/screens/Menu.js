import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../theme/Theme";
import Styles from "../theme/Styles";

export default function Menu({ navigation }) {
    return (
        <View style={Styles.container}>
            <View style={styles.header}>
                <Text style={Styles.title}>Lista de exercícios</Text>
                <Text style={styles.subtitle}>Tarefas elaboradas pelo ChatGPT com o propósito de proporcionar prática e aprimoramento no uso de 'States' no desenvolvimento com React Native. É importante ressaltar que utilizei a inteligência artificial apenas para esclarecimento de dúvidas gerais e para a criação da lista de tarefas.</Text>
            </View>
            <TouchableOpacity
                style={Styles.btn}
                onPress={() => navigation.navigate('Contador')}
            >
                <Text style={Styles.btnText}>
                    Contador
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.btn}
                onPress={() => navigation.navigate('Tasks')}
            >
                <Text style={Styles.btnText}>
                    ToDo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.btn}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={Styles.btnText}>
                    Cadastro
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.btn}
                onPress={() => navigation.navigate('Noticias')}
            >
                <Text style={Styles.btnText}>
                    Notícias
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.bgSecondary,
        padding: 15,
        borderRadius: 4,
        marginBottom: 10
    },
    subtitle: {
        color: Theme.text,
        marginTop: 10,
        textAlign: 'justify',
        fontSize: 16
    },
});