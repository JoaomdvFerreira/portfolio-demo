import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Desktop } from '../layouts/Desktop';
import { Mobile } from '../layouts/Mobile';
import useWindowDimensions from '../utils/useWindowDimension';

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="flex min-h-screen flex-col min-w-screen max-w-screen lg:container lg:mx-auto lg:px-4 xl:container xl:mx-auto xl:px-36">
      <Head>
        <title>Laura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen bg-mobile sm:bg-none sm:block sm:before:content-none sm:h-full">
        <div className="h-full p-16 flex flex-col justify-between sm:block sm:pb-12 relative">
          <div>
            <p className="font-cursive text-blue text-5xl font-bold">Laura</p>
          </div>
          <div className="sm:flex sm:pt-16 sm:pb-0 relative">
            <div className="sm:mt-14 sm:ml-12 sm:z-30">
              <h1 className="text-6xl mb-6 sm:text-8xl sm:text-blue sm:mb-16">
                Hi! Welcome!
              </h1>
              <p className="text-2xl ">You finally found me :)</p>
              <p className="text-2xl ">I've been waiting for you...</p>
            </div>
            <div className="hidden sm:block opacity-90 absolute right-8 top-20">
              <Image
                src={'/images/first_section.jpg'}
                width={450}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {width < 990 ? <Mobile /> : <Desktop />}
    </div>
  );
};

export default Home;
