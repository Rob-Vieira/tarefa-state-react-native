import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Linking,
  Share,
} from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import Theme from "../theme/Theme";
import { useEffect, useState } from "react";
import { useTaskContext } from "../contexts/TasksContext";
import Styles from "../theme/Styles";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

// ... (seu código existente)

export default function Noticias({ navigation }) {
  const [news, setNews] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false); // Inicializa como false
  const [selectedNews, setSelectedNews] = useState(null); // Adiciona estado para acompanhar a notícia selecionada
  
  const shareLink = async (link) => {
    try {
      await Share.share({
        message: link,
      });
    } catch (error) {
      console.error("Erro ao compartilhar link", error);
    }
  };

  const cloneNews = () => news.map(n => n);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=br&apiKey=65660fd7074849ec9956f6d09074dafb"
        );

        let newNews = response.data.articles 
        ? response.data.articles.map(a => {
            a.favorite = false;
            return a;
        })
        : [];

        setNews(newNews);
        console.log("News", new Date());
      } catch (error) {
        console.log("Erro ao buscar notícias: ", error);
      }
    }

    fetchNews();
  }, []);

  const splitLast = (delimiter, target) => {
    let index = target.lastIndexOf(delimiter);
    return [
      target.substring(0, index),
      target.substring(index + delimiter.length),
    ];
  };

  const openModal = (selectedNews, index) => {
    setSelectedNews({article: selectedNews, index: index}); // Atualiza o estado da notícia selecionada
    console.log(selectedNews);
    setVisibleModal(true);
  };

  const closeModal = () => {
    setSelectedNews(null); // Limpa o estado da notícia selecionada
    setVisibleModal(false);
  };

  const openLink = (link) => {
    Linking.canOpenURL(link)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(link);
        } else {
          console.log("Não é possível abrir o link.");
        }
      })
      .catch((err) => console.error("Erro ao tentar abrir o link", err));
  };

  const toggleFavorite = (index) => {
    let newNews = cloneNews();

    newNews[index].favorite = !newNews[index].favorite;

    setNews(newNews)
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Útimas Notícias</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.list}
      >
        {news &&
          news.map((a, i) => (
            <TouchableHighlight
              key={"news_" + i}
              onPress={() => openModal(a, i)}
              underlayColor="transparent"
            >
              <View style={styles.newsCard}>
                <Text style={styles.title}>{splitLast(" - ", a.title)[0]}</Text>
                <Text style={styles.date}>
                  {new Date(a.publishedAt).toLocaleDateString()}
                </Text>
                <TouchableOpacity onPress={() => { toggleFavorite(i) }} style={styles.favoriteBtn}>
                  <AntDesign name={a.favorite ? 'heart' : 'hearto'} size={24} color={Theme.primary} />
                </TouchableOpacity>
              </View>
            </TouchableHighlight>
          ))}
      </ScrollView>
      {selectedNews && (
        <Modal animationType="slide" transparent={true} visible={visibleModal}>
          <View style={styles.modalBg}>
            <View style={styles.modalCont}>
              <Text style={[styles.title, Styles.card]}>
                {splitLast(" - ", selectedNews.article.title)[0]}
              </Text>
              <View style={styles.attributesCont}>
                <Text style={Styles.text}>
                  <Text style={Styles.highlightedText}>
                    Data da publicação:{" "}
                  </Text>{" "}
                  {new Date(selectedNews.article.publishedAt).toLocaleDateString()}
                </Text>
                <Text style={Styles.text}>
                  <Text style={Styles.highlightedText}>Hora publicação: </Text>{" "}
                  {new Date(selectedNews.article.publishedAt).toLocaleTimeString()}
                </Text>
                <Text style={Styles.text}>
                  <Text style={Styles.highlightedText}>Autor: </Text>{" "}
                  {selectedNews.article.author}
                </Text>
              </View>
              <View style={styles.optionsCont}>
                <TouchableHighlight
                  onPress={() => {
                    openLink(selectedNews.article.url);
                  }}
                  underlayColor="transparent"
                  style={styles.btnOpt}
                >
                  <AntDesign name="eyeo" size={24} color={Theme.primary} />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    shareLink(selectedNews.article.url);
                  }}
                  underlayColor="transparent"
                  style={styles.btnOpt}
                >
                  <AntDesign name="sharealt" size={24} color={Theme.primary} />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => { toggleFavorite(selectedNews.index) }}
                  underlayColor="transparent"
                  style={styles.btnOpt}
                >
                  <AntDesign name={selectedNews.article.favorite ? 'heart' : 'hearto'} size={24} color={Theme.primary} />
                </TouchableHighlight>
              </View>
              <TouchableHighlight
                onPress={closeModal}
                underlayColor="transparent"
                style={styles.btnClose}
              >
                <AntDesign name="close" size={24} color={Theme.primary} />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

// ... (seu código existente)

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: Theme.bgSecondary,
    borderRadius: 4,
    padding: 15,
    paddingRight: 50,
    position: "relative",
    gap: 15,
    borderTopWidth: 4,
    borderColor: Theme.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Theme.text,
  },
  date: {
    fontSize: 14,
    fontWeight: "100",
    color: Theme.text,
  },
  favoriteBtn: {
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 5,
  },
  modalBg: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Theme.bgSecondary + "cf",
  },
  modalCont: {
    backgroundColor: Theme.bg,
    padding: 15,
    paddingTop: 60,
    // minHeight: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "relative",
    gap: 20,
  },
  btnClose: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  attributesCont: {
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderColor: Theme.primary,
    gap: 5,
  },
  optionsCont: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
  },
  btnOpt: {},
});
