import {View, Text, Image, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {useUserStore} from "../store/userStore";
import React from "react";
import {Link} from "expo-router";

async function fetchToken() {
    const response = await fetch("http://192.168.1.16:8081/token");
    return await response.json();
}

async function fetchTracks(token: string) {
    console.log('ici')
    const response = await fetch("http://192.168.1.16:8081/tracks", {
        method: "POST",
        body: JSON.stringify({token}),
    });
    console.log('response', response)
    return await response.json();
}

export default function HomeScreen() {
    const [data, setData] = useState(null);
    const updateToken = useUserStore(state => state.updateToken);
    const user = useUserStore(state => state.user);
    useEffect(() => {
        fetchToken().then(data => {
            updateToken(data.access_token);
            fetchTracks(data.access_token).then(data => {
                setData(data);
            });
        });
    }, []);
    return (
        <View className="bg-white">
            {/*<Text onClick={() => console.log(data)}>Home screen</Text>*/}
            {/*<Text>{user ? user.spotifyToken : "Loading..."}</Text>*/}
            <Tracks data={data}/>
        </View>
    )
}


function Tracks({data}) {
    return (
            <View className="flex flex-col gap-4 w-screen pt-10 pl-4">
                <Text className="font-semibold text-xl">Morceaux Populaires </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: '100%'}}>
                    <View className="flex flex-row" style={{ gap : '10px'}}>
                        {data ? data.tracks.map((track, index) => (
                            <Track key={index} track={track}/>
                        )) : <Text>"Loading..."</Text>}

                    </View>
                </ScrollView>
            </View>
    )
}


function Track({track}) {
    return (
        <Link href={`detail?id=${track.id}`}>
            <View className="flex flex-col gap-4">
                <Image source={{uri: track.album.images[0].url}} style={{width: 160, height: 160}} className="rounded-md"/>
                <View>
                    <Text>{track.name}</Text>
                    <Text></Text>
                </View>
            </View>
        </Link>
    )
}