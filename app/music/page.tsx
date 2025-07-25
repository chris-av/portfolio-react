import getTopItems from "@/utils/spotify/api/getTopItems";

export default async function Page() {
  const topItemsPayload = await getTopItems();
  const topItems = topItemsPayload.items;
  return (
    <div>
      {topItems.map(({ id, name, type, images }) => (
        <div key={id}>
          <div>{name}</div>
          <div>{type}</div>
          <div>
            {images.map(({ url }) => (
              <img src={url} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
