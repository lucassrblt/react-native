import { Text, View } from "react-native";
import {StyleSheet} from "react-native";

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
        }
    })

  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Home Screen</Text>
    </View>
  );
}
