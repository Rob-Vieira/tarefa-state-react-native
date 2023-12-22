import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Theme from "../theme/Theme";
import { useEffect, useState } from "react";
import { useTaskContext } from "../contexts/TasksContext";
import Styles from "../theme/Styles";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons'; 

export default function Noticias({ navigation }) {
    
    const [ news, setNews ] = useState([]);
    
    useEffect(() => {
        async function fetchNews (){
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=65660fd7074849ec9956f6d09074dafb');
                setNews(response.data.articles);
            } catch (error) {
                console.log('Erro ao buscar notícias: ', error);
            }
        }

        fetchNews();
    }, []);


    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Útimas Notícias</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.list}
            >
                {news && news.map((a, i) => (
                    <TouchableOpacity key={'news_' + i} style={styles.newsCard}>
                        <Text style={styles.title}>{a.title}</Text>
                        <Text style={styles.date}>{a.publishedAt}</Text>
                        <View style={styles.favoriteBtn}>
                            <AntDesign name="heart" size={24} color={Theme.primary} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    newsCard: {
        backgroundColor: Theme.bgSecondary,
        borderRadius: 4,
        padding: 15,
        paddingRight: 50,
        position: 'relative',
        gap: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Theme.text
    },
    date: {
        fontSize: 14,
        fontWeight: '100',
        color: Theme.text
    },
    favoriteBtn: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        padding: 5
    }
});
