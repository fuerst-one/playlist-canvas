"use server";

import { fetchJSON } from "@/utils/fetchJSON";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

export const refreshSpotifyAccessToken = async (refreshToken: string) => {
  const response = await fetchJSON<{
    access_token: string;
    expires_in: number;
  }>("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
          "base64",
        ),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return {
    accessToken: response.access_token,
    expires: Date.now() + response.expires_in * 1000, // convert expires_in from seconds to milliseconds
  };
};
