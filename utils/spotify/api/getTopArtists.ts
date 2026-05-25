import getAccessToken from "@/utils/spotify/auth/getAccessToken";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

interface TopArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImageMetaData[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface TopArtistsPayload {
  items: TopArtist[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string | null;
  previous: string | null;
}

/**
 * Get the top listened items associated with my account.
 * Paginated.
 */
export default async function getTopItems(): Promise<TopArtistsPayload> {
  const accessToken = await getAccessToken();
  const url = new URL("https://api.spotify.com/v1/me/top/artists");
  url.searchParams.set("limit", "9");
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  const data: TopArtistsPayload = await response.json()
  return data;
}
