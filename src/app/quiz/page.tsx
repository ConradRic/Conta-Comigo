import { StyleSheet, View, Text } from "react-native";
 
 
 
export default function Quiz(){
    return(
        <View style={styles.container}>
 
            <View style={styles.header}>
                <Text style={styles.title}>Adição</Text>
                <Text style={styles.subtitle}>Selecione a melhor resposta para complementar a continha</Text>
            </View>
        

        <View style={styles.equationContainer}>
            <View style={styles.numberBox}>
                <Text style={styles.numberText}>3</Text>
            </View>

             <Text style={styles.operatorText}>+</Text>

              <View style={styles.numberBox}>
                <Text style={styles.numberBox}>3</Text>

                <Text style={styles.operatorText}>=</Text>

                <View style={styles.resultBox}>

                </View>
              </View>

        </View>
    </View>
 
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header:{
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5
    },
 
    subtitle:{
        fontSize: 16,
        color: "#666666",
        textAlign: "center"
    },
    
    equationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 55,
        marginBottom: 30
    },

    numberBox: {
        width: 60,
        height: 60,
        backgroundColor: "#f0f0ff",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },

     resultBox: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: "#6750a4", // Cor Roxa
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    operatorText: {
        fontSize: 28,
        fontWeight: "bold",
        marginHorizontal: 15
    },

    numberText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6750a4"
    }
 
})