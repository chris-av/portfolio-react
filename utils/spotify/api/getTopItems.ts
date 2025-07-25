import getAccessToken from "@/utils/spotify/auth/getAccessToken";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

interface TopItem {
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

interface TopItemsPayload {
  items: TopItem[];
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
export default async function getTopItems(): Promise<TopItemsPayload> {
  const accessToken = await getAccessToken();
  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  const data: TopItemsPayload = await response.json()
  return data;
}
