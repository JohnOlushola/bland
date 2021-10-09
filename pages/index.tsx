import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bland</title>
        <meta name="description" content="Implementing bland design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-grey h-screen text-white p-20">
        <div className="flex flex-col h-full justify-between">
          <div>
            <p className="font-light">SINCE 2003</p>
            <p className="text-9xl mt-10 tracking-tight">BLAND.</p>
          </div>
          <div>
            <div className="flex mb-8">
              <button className="h-14 w-14 rounded-full bg-gray-100 mr-4">
                <p className="text-2xl text-grey-light my-auto">1</p>
              </button>
              <button className="h-14 w-14 rounded-full bg-grey-lighter mr-4">
                <p className="text-2xl text-grey-light my-auto">2</p>
              </button>
              <button className="h-14 w-14 rounded-full bg-grey-lighter mr-4">
                <p className="text-2xl text-grey-light my-auto">3</p>
              </button>
            </div>
            <p className="uppercase text-sm text-gray-300 sm:w-1/5">
              Playing with plain colors, wide layouts and large typography
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
