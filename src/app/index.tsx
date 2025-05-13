import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
 
export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Conta comingo</Text>
                    <Text style={styles.subtitle}>Estude matemática básica com a gente</Text>
                </View>

                <Image style={styles.headerImage} source={require("../../assets/images/banner.png")}/>

                <Text style={styles.sectionTitle}>Quizes</Text>

                <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/adicao.png")}/>
                    </View>

                    <View style={styles.quizContainer}>
                        <Text style={styles.quizTitle}>Adição</Text>
                        <Text style={styles.quizDescription}>Um desafio divertido para treinar sua mente!</Text>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/subtracao.png")}/>
                    </View>

                    <View style={styles.quizContainer}>
                        <Text style={styles.quizTitle}>Subtração</Text>
                        <Text style={styles.quizDescription}>Descubra o resultado das continhas!</Text>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/multiplicacao.png")}/>
                    </View>

                    <View style={styles.quizContainer}>
                        <Text style={styles.quizTitle}>Multiplicação</Text>
                        <Text style={styles.quizDescription}>Resolva as continhas e prove que você manda bem!</Text>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/divisao.png")}/>
                    </View>

                    <View style={styles.quizContainer}>
                        <Text style={styles.quizTitle}>Divisão</Text>
                        <Text style={styles.quizDescription}>Um jeito legal de praticar com diversão!!</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}
 
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    },
    subtitle: {
        fontSize: 16,
        color: "#666666"
    },
    header: {
        padding: 20,
        paddingTop: 15
    },
    headerImage: {
        height: 190,
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        width: "90%"
    },
    sectionTitle: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        color: '#000',
        fontWeight: "bold"
    },
    quizCard: {
        backgroundColor: "#f5f5f5",
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    iconImage: {
        width: 45,
        height: 45
    },
    iconBox: {
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: "#e6d8fa",
        alignItems: "center",
        justifyContent: "center"
    },
    quizTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"
    },
    quizDescription: {
        fontSize: 14,
        color: "#000",
        flexWrap: "wrap" // Caso o texto for muito grande ele irá cair para baixo
    },
    quizContainer: {
        flex: 1, // Ocupa todo o espaço disponivel parecido com widht: 100%
        padding: 15
    },
    container: {
        flex: 1
    }
})  