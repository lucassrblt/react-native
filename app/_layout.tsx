import {Stack} from "expo-router";
import {createTamagui, TamaguiProvider, View} from 'tamagui'
import defaultConfig from '@tamagui/config/v3'


export default function RootLayout() {
    const config = createTamagui(defaultConfig)
    return (
        <TamaguiProvider config={config}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
        </TamaguiProvider>

    );
}



