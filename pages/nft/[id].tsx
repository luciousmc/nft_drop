import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';

function NFTDopPage() {
  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  const router = useRouter();

  const { ext, title } = router.query;

  return (
    <main className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <section className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src={`/images/${title}.${ext}`}
              alt="Ape Image"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">King of Apes</h1>
            <h2 className="text-xl text-gray-300">A collection of apes</h2>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              LucioWeb
            </span>{' '}
            Market Place
          </h1>

          <button
            onClick={address ? disconnect : connectWithMetaMask}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            Logged in as {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* Content */}
        <div className="lg:space-6-0 mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center">
          <img
            src="https://links.papareact.com/bdy"
            alt="Ape Collage Image"
            className="w-80 object-cover pb-10 lg:h-40"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            King of Apes Club | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500">15 / 30 NFT's claimed</p>
        </div>

        {/* Button */}
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </section>
    </main>
  );
}
export default NFTDopPage;
