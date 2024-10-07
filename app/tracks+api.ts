import getPopularTracks from "@/services/spotify/tracks";

export async function POST(request: Request) {
    // return new Response(JSON.stringify("POST request received"));
    const { token } = await request.json();
    const tracks = await getPopularTracks(token);
    return new Response(JSON.stringify(tracks));
}