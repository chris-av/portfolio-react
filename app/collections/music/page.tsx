import Image from "next/image";
import getTopArtists from "@/utils/spotify/api/getTopArtists";
import getTopTracks from "@/utils/spotify/api/getTopTracks";
import getPlaylist from "@/utils/spotify/api/getPlaylist";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

export default async function Page() {
  const [topArtistsPayload, topTracksPayload, playlist] = await Promise.all([
    getTopArtists(),
    getTopTracks(),
    getPlaylist("5qAAPtzz49U2o1tJlAArgz"),
  ]);
  const topArtists = topArtistsPayload.items;
  const topTracks = topTracksPayload.items;

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <SectionHeading>My top music artists</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topArtists.map(({ id, name, external_urls: { spotify: href }, images }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between p-4 items-center rounded-xl border border-[#434179]/20 bg-[#434179]/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#434179] hover:bg-[#434179]/10 hover:shadow-[0_8px_32px_rgba(67,65,121,0.35)]">
              <h2 className="text-lg">{name}</h2>
              <RenderImage images={images} round />
            </div>
          </a>
        ))}
      </div>

      <SectionHeading>Songs on my rotation</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topTracks.map(({ id, name, external_urls: { spotify: href }, album: { images } }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between p-4 items-center rounded-xl border border-[#13C253]/20 bg-[#13C253]/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#13C253] hover:bg-[#13C253]/10 hover:shadow-[0_8px_32px_rgba(19,194,83,0.3)]">
              <h2 className="text-lg">{name}</h2>
              <RenderImage images={images} />
            </div>
          </a>
        ))}
      </div>

      <SectionHeading>Support these artists</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {playlist.tracks.items.map(({ item: { id, name, artists, album: { images }, external_urls: { spotify } } }) => (
          <a key={id} href={spotify} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between p-4 items-center rounded-xl border border-[#434179]/20 bg-[#434179]/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#434179] hover:bg-[#434179]/10 hover:shadow-[0_8px_32px_rgba(67,65,121,0.35)]">
              <RenderImage images={images} />
              <div className="text-right">
                <h3>{name}</h3>
                <div className="text-sm font-normal opacity-70">{artists.map(a => a.name).join(", ")}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-4xl md:text-4xl my-8 relative inline-block w-full">
      {children}
    </h2>
  );
}

interface RenderImageProps {
  images: SpotifyImageMetaData[];
  round?: boolean;
}

function RenderImage({ images, round = false }: RenderImageProps) {
  if (images.length < 1) return <div className="w-[72px]" />;
  const { url } = images[0];
  return (
    <div
      className={`relative shrink-0 aspect-square overflow-hidden ${round ? "rounded-full" : "rounded-lg"}`}
      style={{ width: "72px" }}
    >
      <Image
        src={url}
        alt="Cover image"
        fill
        sizes="72px"
        className="object-cover"
      />
    </div>
  );
}
