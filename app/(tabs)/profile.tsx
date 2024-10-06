import { Text, View, StyleSheet, Pressable } from 'react-native';
import {Button} from "tamagui";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile screen</Text>
            <View>
                <Button>Inscription</Button>
                <Button>Connexion</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#0e0e0e',
    },
});