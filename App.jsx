import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const handleTextClick = () => {
        count !== 10 ? setCount(count + 1) : "";
    };

    const handleImageClick = () => {
        count !== 0 ? setCount(count - 1) : "";
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text
                numberOfLines={3}
                onPress={handleTextClick}
                style={{ marginBottom: 50 }}
            >
                Hello World {count}
            </Text>
            <TouchableWithoutFeedback onPress={handleImageClick}>
                <Image
                    source={require("./assets/icon.png")}
                    style={styles.img}
                />
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    },
});

export default App;
