import type { NextPage } from 'next';
import Head from 'next/head';
import NFTCard from '../components/NFTCard';

const Home: NextPage = () => {
  return (
    <div className="pb-20">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mb-20 h-screen bg-orangegold p-12">
        <div className="m-auto max-w-7xl">
          <menu>
            <nav>
              <ul></ul>
            </nav>
          </menu>
          <div className="relative overflow-hidden md:flex md:items-center">
            <div className="flex justify-center overflow-hidden">
              <img
                className="margin-auto md:-translate-x-15 h-[300px] object-cover lg:h-[400px] lg:w-[900px]"
                src="/images/main_hero_ape.jpg"
                alt="King Ape Image"
              />
            </div>
            <div>
              <h1 className="z-50 p-5 text-center text-3xl font-bold text-white md:text-5xl lg:text-8xl">
                The King of Ape Collections
              </h1>
            </div>
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:ml-auto lg:block">
              <span className="-z-[1] whitespace-nowrap stroke-white stroke-2 text-[10rem] font-extrabold leading-none text-gray-300 opacity-20">
                APES APES <br /> APES APES <br /> APES APES
              </span>
            </div>
          </div>
        </div>

        <hr className="m-auto my-20 w-1/2 border" />

        <h2 className="my-10 text-center text-2xl font-bold text-white underline decoration-slate-300 md:text-left md:text-4xl lg:text-5xl">
          Check out our collections!
        </h2>

        <div className="m-auto max-w-7xl">
          <NFTCard
            imgURL="/images/3d-ape.png"
            title="3d Ape"
            mintCount="12/20"
          />
          <NFTCard
            imgURL="/images/ameri-ape.webp"
            title="Ameri Ape"
            mintCount="1/3"
          />
          <NFTCard
            imgURL="/images/angel-ape.jpg"
            title="Angel Ape"
            mintCount="3/3"
          />
          <NFTCard
            imgURL="/images/pink-ape.png"
            title="Pink Ape"
            mintCount="4/5"
          />
          <NFTCard
            imgURL="/images/sailor-ape.jfif"
            title="Sailor Ape"
            mintCount="1/4"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
