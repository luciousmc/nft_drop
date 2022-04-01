import { useRouter } from 'next/router';

export type NFTCardProps = {
  imgURL: string;
  title: string;
  mintCount: string;
};

function NFTCard({ imgURL, title, mintCount }: NFTCardProps) {
  const router = useRouter();
  const titleURL = title.replace(' ', '-').toLowerCase();
  const imgExt = imgURL.substring(imgURL.indexOf('.') + 1);

  return (
    <div
      onClick={() =>
        router.push({
          pathname: `/nft/${titleURL}`,
          query: {
            title: titleURL,
            ext: imgExt,
          },
        })
      }
      className="my-3 mx-2 inline-block w-56 cursor-pointer rounded-lg border-b bg-white p-3 shadow-md transition duration-150 hover:-translate-y-2 hover:shadow-xl"
    >
      <div>
        <img className="rounded-lg" src={imgURL} alt={title} />
      </div>
      <div className="my-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{mintCount} minted</p>
      </div>
    </div>
  );
}
export default NFTCard;
