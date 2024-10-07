async function getPopularTracks(token: string){
    const url = `${process.env.EXPO_PUBLIC_SPOTIFYAPI_URL}/artists/2NgTPluNpfsoYZnoeU2VsH/top-tracks`;

    try{
        console.log("url", `${process.env.EXPO_PUBLIC_SPOTIFYAPI_URL}/artists/2NgTPluNpfsoYZnoeU2VsH?si=SjH3zcicSgm9GIgmn0mmVg`);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }})

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }catch(e){
        console.log("Erreur lors de la récupération des tracks populaires:", e);
        throw e;
    }
}

export default getPopularTracks;