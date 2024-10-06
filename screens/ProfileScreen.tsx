import {View, Text} from "react-native";
import {Button} from "tamagui";
import {Link} from "expo-router";
export default function ProfileScreen() {
    return (
        <View className="bg-white flex-1 justify-center items-center gap-8">
            <Text>Profile screen</Text>
            <View className="flex gap-3 flex-row">
                <Link href="/register">
                    <Button>Inscription</Button>
                </Link>
                <Link href="/login">
                    <Button>Connexionnn</Button>
                </Link>
            </View>
        </View>
    )
}