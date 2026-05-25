import getAccessToken from "@/utils/spotify/auth/getAccessToken";

interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks;
}

interface PlaylistTracks {
  href: string;
  items: PlaylistTrackItem[];
}

interface PlaylistTrackItem {
  added_at: string;
  added_by: User;
  is_local: boolean;
  primary_color: string | null;
  track: Track;
  item: Track;
  video_thumbnail: VideoThumbnail;
}

interface Track {
  preview_url: string | null;
  available_markets: string[];
  explicit: boolean;
  type: string;
  episode: boolean;
  track: boolean;

  album: Album;
  artists: Artist[];

  disc_number: number;
  track_number: number;
  duration_ms: number;

  external_ids: ExternalIds;
  external_urls: ExternalUrls;

  href: string;
  id: string;
  name: string;
  popularity: number;
  uri: string;

  is_local: boolean;
}

interface Album {
  available_markets: string[];
  type: string;
  album_type: string;

  href: string;
  id: string;

  images: Image[];

  name: string;
  release_date: string;
  release_date_precision: string;

  uri: string;

  artists: Artist[];

  external_urls: ExternalUrls;

  total_tracks: number;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface User {
  display_name?: string;

  external_urls: ExternalUrls;

  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Followers {
  href: string | null;
  total: number;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  url: string;
  width: number;
  height: number;
}

interface VideoThumbnail {
  url: string | null;
}

/**
 * Get tracks for a specific playlist.
 * Paginated.
 */
export default async function getPlaylist(playlistId: string): Promise<SpotifyPlaylist> {
  const accessToken = await getAccessToken();
  const url = new URL(`https://api.spotify.com/v1/playlists/${playlistId}`);
  url.searchParams.set("limit", "9");
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  const data: SpotifyPlaylist = await response.json()
  return data;
}
