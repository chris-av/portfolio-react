const getEnvVar = (envName: string) => {
  const value = process.env[envName];
  if (!value) {
    throw new Error(`Could not resolve ${envName} from environment`);
  }
  return value;
}

export const getSpotifyClientId = () => {
  return getEnvVar("SPOTIFY_CLIENT_ID");
}

export const getSpotifyClientSecret = () => {
  return getEnvVar("SPOTIFY_CLIENT_SECRET");
}

export const getSpotifyRefreshToken = () => {
  return getEnvVar("SPOTIFY_REFRESH_TOKEN");
}
