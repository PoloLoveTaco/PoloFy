import { NextResponse } from "next/server";

const clientId = process.env.SPOTIFY_ID!;
const clientSecret = process.env.SPOTIFY_SECRET!;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

const cache = {
  accessToken: "",
  expiresAt: 0,
};

async function refreshAccessToken() {
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await res.json();

  cache.accessToken = data.access_token;
  cache.expiresAt = Date.now() + data.expires_in * 1000;
}

async function getAccessToken() {
  if (!cache.accessToken || Date.now() > cache.expiresAt) {
    await refreshAccessToken();
  }
  return cache.accessToken;
}

export async function GET() {
  const accessToken = await getAccessToken();

  // Test avec l’API Spotify : ici, on récupère les infos du profil connecté
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
