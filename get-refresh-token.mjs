// fichier get-refresh-token.ts
import fetch from "node-fetch";

const clientId = "ebc3b0124ff34ca485f4a55a7e5f17c9";
const clientSecret = "c70b06a74e0443e5878bfd24aab6bfef";
const redirectUri = "https://polo-fy.vercel.app/";
const code = "AQAZsqKHx_3ZrhzwTO_O-Ie79NtVqWkmCp7dZXlxKFu-H8IDZ39D3fEbAukZYI13vjUUX80M9W6L2kBShtvAyE-AACMjSsklKRPfOg0EwK0uZpFkNQsML23MzirWGrUzXE1xcKGsaNUKnO5UuNKdvX6ofxYcMkBUYj5fLmV3NSJaAe4ASf6Gdo3pMQlf14BHVSSpm1VTvVq0cYUbe3_euj1RPw";

async function main() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await response.json();
  console.log(data);
}

main();
