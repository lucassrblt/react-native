import { Text, View } from "react-native";
import {StyleSheet} from "react-native";
import { Link} from "expo-router";

export default function Index() {

    const style = StyleSheet.create({
        container : {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#25292e",
        },
        text : {
            color: "#fff",
        },
        link : {
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#fff'
        }
    })

  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Home Screen</Text>
        <Link href="/about" style={style.link}>About</Link>
    </View>
  );
}
