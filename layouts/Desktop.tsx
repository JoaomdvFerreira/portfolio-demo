import Image from 'next/image';
import { useRouter } from 'next/router';

export const Desktop: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <section className="h-screen bg-beige sm:h-full">
        <div className="h-full py-16 flex flex-col relative sm:py-28 sm:pl-16">
          <div>
            <p className="text-3xl text-end mb-16 sm:text-6xl text-blue">
              LET´S START OUR WORK{' '}
              <span className="text-darkBlue">TOGETHER.</span>
            </p>
          </div>
          <div className="relative hidden sm:flex">
            <Image
              src={'/images/second_section1.jpg'}
              width={190}
              height={225}
            />
            <div className="absolute left-56">
              <p className="mb-14">Let me introduce myself properly.</p>
              <Image
                src={'/images/second_section2.jpg'}
                width={225}
                height={175}
              />
            </div>
            <div className="absolute top-8 left-56">
              <p className="font-cursive text-6xl text-gray">
                My name is Laura.
              </p>
            </div>
          </div>
          <div className="py-24 relative hidden sm:block">
            <p className="text-2xl mb-2">
              INSPIRING <br />
              PHOTOGRAPHY
            </p>
            <p className="">
              A passionate photographer who tells story's. <br />I discovered
              very early on that I have a knack for telling stories through the
              senses. I've also <br />
              found that anyone who looks at my work automatically feels
              inspired. If you are one of those <br />
              people who is inspired to see this page and want to know more
              about me, click the button <br />
              below. There you will be able to understand what I mean by telling
              stories through the <br />
              senses.
            </p>
            <button
              className="mt-6 font-cursive text-2xl text-darkBlue font-bold"
              onClick={() => router.push('/blog')}
            >
              Read Me
            </button>
            <div className="absolute -top-40 right-0">
              <Image
                src={'/images/second_section3.jpg'}
                width={250}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-full bg-white relative sm:mr-16">
        <div className="hidden text-5xl p-14 text-center sm:block sm:absolute sm:-top-44 sm:left-52">
          <p>
            <span className="text-gold">Brand</span> Portfolio Photography
          </p>
          <p>
            <span className="text-lightGold">Personal</span> Portfolio
            Photography
          </p>
          <p>
            <span className="text-brown">Multiple</span> Portfolio Photography
          </p>
          <p>
            <span className="text-lightBrown">Business</span> Portfolio
            Photography
          </p>
          <p>
            <span className="text-uknowkn">Fun</span> Portfolio Photography
          </p>
        </div>
        <div className="hidden sm:block sm:mt-52 relative">
          <div className="absolute top-0">
            <Image
              src={'/images/third_section3.jpg'}
              width={300}
              height={300}
            />
          </div>
          <div className="absolute top-40 left-56">
            <Image
              src={'/images/third_section5.jpg'}
              width={275}
              height={336}
            />
          </div>
          <div className="absolute top-24 right-64">
            <Image
              src={'/images/third_section1.jpg'}
              width={200}
              height={250}
            />
          </div>
          <div className="absolute top-40 right-0">
            <Image
              src={'/images/third_section2.jpg'}
              width={258}
              height={336}
            />
          </div>
          <div className="absolute top-[26rem]">
            <Image
              src={'/images/third_section4.jpg'}
              width={360}
              height={200}
            />
          </div>
          <div className="absolute top-[31rem] right-52">
            <Image
              src={'/images/third_section6.jpg'}
              width={210}
              height={325}
            />
          </div>
          <div className="absolute top-[45rem] right-0">
            <Image
              src={'/images/third_section7.jpg'}
              width={208}
              height={275}
            />
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:gap-[42rem] sm:mb-52 ">
          <div className=" text-end text-blue">
            <p className="text-2xl">
              PORTFOLIO <br />
              PHOTOGRAPHY
            </p>
          </div>
          <div className="hidden sm:block sm:pl-16">
            <p className="text-2xl text-blue">
              PORTFOLIO <br />
              PHOTOGRAPHY
            </p>
            <p className="py-4">
              Want to tell your brand story visually? <br />
              Working on the photographic identity of a business or personal
              brand has its own process. <br />
              By working with me, you won't just stare at me while I click the
              button on the machine, you'll <br />
              learn to visualize, train your hearing, and tell your story in a
              real and spontaneous way. You can <br />
              see some more works that are part of my portfolio, and see if this
              is the path you want to follow. <br />
              If you have any doubts, contact me.
            </p>
            <button
              className="font-cursive text-2xl text-darkBlue font-bold"
              onClick={() => router.push('/portfolio')}
            >
              More Portfolio
            </button>
            <div className="relative">
              <div className="absolute right-0 top-20">
                <p className="text-4xl text-blue">
                  SOME PEOPLE <br />
                  TELL <span className="ml-3">GOOD THINGS ABOUT ME</span> <br />
                </p>
              </div>
              <div className="absolute right-0 top-44">
                <p className="text-darkBlue text-4xl mt-4">BELIEVE THEM :) </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-beige sm:h-full">
        <div className="hidden relative sm:block">
          <div className="relative pt-24">
            <Image
              src={'/images/fourth_section1.jpg'}
              width={1000}
              height={300}
              className="object-cover"
            />
            <div className="absolute grid grid-cols-3 gap-6 text-uknowkn top-2/4 mx-24">
              <div>
                <p className="font-cursive">Catherine Sailor</p>
                <p>
                  An incredible view of what can be done in the world of
                  photography. I learned a lot from Laura! I will continue to
                  work with her for many, many years to come. She is a person to
                  be around!
                </p>
              </div>
              <div>
                <p className="font-cursive">Benjamin L.</p>
                <p>
                  Laura helped me understand the true essence of telling a
                  story. Thanks for your patience, Laura :)
                </p>
              </div>
              <div>
                <p className="font-cursive">Maria do Pomar</p>
                <p>
                  Laura is not just a photographer. She is also a mentor,
                  consultant, worker, entrepreneur, and above all, friend. We
                  managed to do an incredible job with the creation of our
                  brand, thanks to Laura. A huge thank you!
                </p>
              </div>
            </div>
          </div>
          <div className="m-24 text-center text-4xl text-blue">
            <p className="font-cursive">
              Telling a story is good, but helping someone else build <br />
              theirs is even better, and that's part of the story <br />I want
              to tell.
            </p>
            <p className="text-sm text-end text-blue">- Laura Trigueirão</p>
          </div>
          <div className="mb-24">
            <p className="text-center mb-6 text-3xl">CONTACT ME:</p>
            <div className="flex justify-around text-center">
              <div>
                <p className="font-cursive text-lg">Instagram</p>
                <button
                  onClick={() =>
                    router.push('https://www.instagram.com/laura.trigueirao/')
                  }
                >
                  @laura.trigueirao
                </button>
              </div>
              <div>
                <p className="font-cursive text-lg">Behance</p>
                <button
                  onClick={() =>
                    router.push('https://www.behance.net/trigueiraolaura')
                  }
                >
                  @laura.trigueirao
                </button>
              </div>
              <div>
                <p className="font-cursive text-lg">Email</p>
                <button
                  onClick={() =>
                    router.push('mailto:laura.trigueirao@gmail.com')
                  }
                >
                  @laura.trigueirao
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
