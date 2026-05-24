import Image from "next/image";
import getTopItems from "@/utils/spotify/api/getTopItems";
import { SpotifyImageMetaData } from "@/utils/spotify/common/interfaces";

export default async function Page() {
  const topItemsPayload = await getTopItems();
  const topItems = topItemsPayload.items;
  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-center text-4xl my-4">My top music artists</h2>
      <
        div
        className="grid grid-cols-3 gap-4"
      >
        {topItems.map(({ id, name, external_urls: { spotify: href }, images }) => (
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
