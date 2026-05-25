import Image from "next/image";
import getTopArtists from "@/utils/spotify/api/getTopArtists";
import getTopTracks from "@/utils/spotify/api/getTopTracks";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

export default async function Page() {
  const [topArtistsPayload, topTracksPayload] = await Promise.all([
    getTopArtists(),
    getTopTracks(),
  ]);
  const topArtists = topArtistsPayload.items;
  const topTracks = topTracksPayload.items;

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h2 className="text-center text-4xl md:text-4xl my-8">My top music artists</h2>
      <
        div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {topArtists.map(({ id, name, external_urls: { spotify: href }, images }) => (
          <a href={href} target="_blank">
            <
              div
              key={id}
              className="flex justify-between p-4 items-center border-2 border-blue-100 hover:border-blue-400 rounded-xl transition-all ease-in"
            >
              <div>
                <h2 className="text-lg">{name}</h2>
              </div>
              <div>
                <RenderArtistImage images={images} />
              </div>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-center text-4xl md:text-4xl my-8">Songs on my rotation</h2>
      <
        div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {topTracks.map(({ id, name, external_urls: { spotify: href }, album: { images } }) => (
          <a href={href} target="_blank">
            <
              div
              key={id}
              className="flex justify-between p-4 items-center border-2 border-blue-100 hover:border-blue-400 rounded-xl transition-all ease-in"
            >
              <div>
                <h2 className="text-lg">{name}</h2>
              </div>
              <div>
                <RenderArtistImage images={images} />
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );

}

interface RenderArtistImageProps {
  images: SpotifyImageMetaData[]
}

function RenderArtistImage({ images }: RenderArtistImageProps) {
  if (images.length >= 1) {
    const useImage = images[0];
    const { url } = useImage;
    return (
      <div
        className="relative rounded-2xl aspect-square overflow-hidden"
        style={{
          width: "100px",
        }}
      >
        <Image
          src={url} alt="Artist image"
          fill
          sizes="(max-width: 650px) 100vw, 300px"
          className="object-cover"
        />
      </div>
    );
  }
  return <div></div>;
}
