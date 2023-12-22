import { StyleSheet } from "react-native"
import Theme from "./Theme";

const Styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingBottom: 25,
        gap: 25,
        flex: 1,
        backgroundColor: Theme.bg
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
    highlightedText: {
        color: Theme.primary,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: Theme.bgSecondary,
        padding: 15,
        gap: 10,
        borderRadius: 4
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
        flex: 1,
        minHeight: 100
    }
});

export default Styles;