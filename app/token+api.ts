import getSpotifyToken from "@/services/spotify/token";

export async function GET(request: Request) {
    const token = await getSpotifyToken();
    return new Response(JSON.stringify(token), {
        headers: { "Content-Type": "application/json" },
    });
}