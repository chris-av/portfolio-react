import getAccessToken from "@/utils/spotify/auth/getAccessToken";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

interface TopTrack {
  album: {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };

  artists: Artist[];

  available_markets: string[];

  disc_number: number;
  duration_ms: number;
  explicit: boolean;

  external_ids: {
    isrc: string;
  };

  external_urls: ExternalUrls;

  href: string;
  id: string;

  is_local: boolean;
  is_playable: boolean;

  name: string;
  popularity: number;

  preview_url: string | null;

  track_number: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface TopTracksPayload {
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: string;
  items: TopTrack[];
}

/**
 * Get the top listened tracks associated with my account.
 * Paginated.
 */
export default async function getTopTracks(): Promise<TopTracksPayload> {
  const accessToken = await getAccessToken();
  const url = new URL("https://api.spotify.com/v1/me/top/tracks");
  url.searchParams.set("limit", "9");
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  const data: TopTracksPayload = await response.json()
  return data;
}
