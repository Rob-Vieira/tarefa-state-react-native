import { ScrollView, StyleSheet, View, Text } from "react-native";
import realm from "../services/RealmService";
import { useEffect, useState } from "react";
import Theme from "../theme/Theme";
import Styles from "../theme/Styles";

export default function Cadastrados({ navigation, route }){
    const [users, setUsers] = useState([]);
    const [lastUser, setLastUser] = useState([]);

    const { id } = route.params;

    useEffect(() => {
        const fetchAllUsers = () => {
            realm.write(() => {
                const allUsers = realm.objects('User');
                setUsers(allUsers);
            });
        }

        const fetchLastUsers = () => {
            realm.write(() => {
                const user = realm.objectForPrimaryKey('User', id);
                setLastUser(user);
            });
        }

        fetchAllUsers();
        fetchLastUsers();

        return () => {
            const allUsers = realm.objects('User');
            const user = realm.objectForPrimaryKey('User', id);
            allUsers.removeAllListeners();
            user.removeAllListeners();
        }
    }, []);
    
    return (
        <View style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.list}>
                <Text style={Styles.title}>Ultimo usuário cadastrado</Text>
                <View style={Styles.card}>
                    <Text style={Styles.text}><Text style={Styles.highlightedText} >id: </Text> { lastUser._id } </Text>
                    <Text style={Styles.text}><Text style={Styles.highlightedText} >Nome: </Text> { lastUser.name } </Text>
                    <Text style={Styles.text}><Text style={Styles.highlightedText} >E-mail: </Text> { lastUser.email } </Text>
                    <Text style={Styles.text}><Text style={Styles.highlightedText} >Senha: </Text> { lastUser.password } </Text>
                </View>

                <Text style={Styles.title}>Todos os usuários</Text>
                {
                    users.map(user => (
                        <View key={ user._id } style={Styles.card}>
                            <Text style={Styles.text}><Text style={Styles.highlightedText} >id: </Text>{ user._id } </Text>
                            <Text style={Styles.text}><Text style={Styles.highlightedText} >Nome: </Text>{ user.name } </Text>
                            <Text style={Styles.text}><Text style={Styles.highlightedText} >E-mail: </Text>{ user.email } </Text>
                            <Text style={Styles.text}><Text style={Styles.highlightedText} >Senha: </Text>{ user.password } </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}