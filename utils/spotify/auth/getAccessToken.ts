import {
  getSpotifyRefreshToken,
  getSpotifyClientId,
  getSpotifyClientSecret,
} from "./consts"


/**
 * will perform the request to procure a new access token from /api/token
 */
export default async function getAccessToken() {
  const endpoint = "https://accounts.spotify.com/api/token";

  const refreshToken = getSpotifyRefreshToken();
  const clientId = getSpotifyClientId();
  const clientSecret = getSpotifyClientSecret();

  const encodedSecrets = `${clientId}:${clientSecret}`;
  const basicAuth = `Basic ${Buffer.from(encodedSecrets).toString("base64")}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": basicAuth,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("Did not get a status success when fetching authentication token");
  }

  return data["access_token"];

}
