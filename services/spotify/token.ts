const getSpotifyToken = async () => {
    try{
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=${process.env.EXPO_PUBLIC_SPOTIFYAPI_GRANTTYPE}&client_id=${process.env.EXPO_PUBLIC_SPOTIFYAPI_CLIENT_ID}&client_secret=${process.env.EXPO_PUBLIC_SPOTIFYAPI_CLIENT_SECRET}`
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }catch(e){
        console.error("Erreur lors de la récupération du token Spotify:", e);
        throw e;
    }
}


export default getSpotifyToken;