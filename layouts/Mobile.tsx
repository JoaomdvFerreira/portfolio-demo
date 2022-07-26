import Image from 'next/image';

export const Mobile: React.FC = () => {
  return (
    <>
      <section className="h-screen bg-beige">
        <div className="h-full py-16 flex flex-col relative">
          <div>
            <p className="text-3xl text-end mb-16 text-blue">
              LET´S START OUR WORK{' '}
              <span className="text-darkBlue">TOGETHER.</span>
            </p>
          </div>
          <div className="flex justify-end relative mb-6">
            <Image
              src={'/images/second_section1.jpg'}
              width={150}
              height={150}
              className="object-cover"
            />
            <Image
              src={'/images/second_section2.jpg'}
              width={150}
              height={150}
              className="object-cover"
            />
            <p className="absolute -bottom-3 left-12">
              Let me introduce myself properly.
            </p>
          </div>
          <div className="text-center flex flex-col justify-between h-full">
            <p className="font-cursive text-5xl font-bold text-gray">
              My name is Laura.
            </p>
            <p className="text-2xl">INSPIRING PHOTOGRAPHY</p>
            <p className="px-8">
              A passionate photographer who tells story's. I discovered very
              early on that I have a knack for telling stories through the
              senses. I've also found that anyone who looks at my work
              automatically feels inspired. If you are one of those people who
              is inspired to see this page and want to know more about me, click
              the button below. There you will be able to understand what I mean
              by telling stories through the senses.
            </p>
            <button className="font-cursive text-4xl text-darkBlue font-bold">
              Read Me
            </button>
          </div>
        </div>
      </section>
      <section className="h-full bg-white relative">
        <div className="leading-9 text-3xl p-12 text-center">
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
        <div className="grid grid-cols-2">
          <Image
            src={'/images/third_section1.jpg'}
            width={250}
            height={200}
            className="object-cover"
          ></Image>
          <Image
            src={'/images/third_section2.jpg'}
            width={200}
            height={200}
            className="object-cover"
          ></Image>
          <Image
            src={'/images/third_section3.jpg'}
            width={200}
            height={200}
            className="object-cover"
          ></Image>
          <Image
            src={'/images/third_section4.jpg'}
            width={200}
            height={200}
            className="object-cover"
          ></Image>
          <Image
            src={'/images/third_section5.jpg'}
            width={200}
            height={200}
            className="object-cover"
          ></Image>
          <Image
            src={'/images/third_section6.jpg'}
            width={200}
            height={200}
            className="object-cover"
          ></Image>
        </div>
        <div className="text-center flex flex-col justify-between py-10">
          <p className="text-2xl">PORTFOLIO PHOTOGRAPHY</p>
          <p className="px-8 my-5">
            Want to tell your brand story visually? <br />
            Working on the photographic identity of a business or personal brand
            has its own process. By working with me, you won't just stare at me
            while I click the button on the machine, you'll learn to visualize,
            train your hearing, and tell your story in a real and spontaneous
            way. You can see some more works that are part of my portfolio, and
            see if this is the path you want to follow. If you have any doubts,
            contact me.
          </p>
          <button className="font-cursive text-4xl text-blue font-bold">
            More Portfolio
          </button>
        </div>
      </section>
      <section className="h-full bg-beige">
        <div className="relative">
          <div className="p-8">
            <p className="text-4xl text-blue">
              SOME PEOPLE <br />
              TELL <span className="ml-3">GOOD THINGS ABOUT ME</span> <br />
            </p>
            <p className="text-darkBlue text-end text-4xl mt-4">
              BELIEVE THEM :)
            </p>
          </div>
          <div className="relative">
            <Image
              src={'/images/fourth_section1.jpg'}
              width={400}
              height={400}
            />
            <div className="absolute grid grid-cols-2 gap-6 text-uknowkn top-1/4 mx-6">
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
          <div className="p-8 text-center">
            <p className="font-cursive text-xl">
              Telling a story is good, but helping someone else build theirs is
              even better, and that's part of the story I want to tell.
            </p>
            <p className="text-xs text-end text-blue">- Laura Trigueirão</p>
          </div>
          <div className="mb-8">
            <p className="text-center mb-3">CONTACT ME:</p>
            <div className="flex justify-around text-center">
              <div>
                <p className="font-cursive">Instagram</p>
                <p>@laura.trigueirao</p>
              </div>
              <div>
                <p className="font-cursive">Behance</p>
                <p>@laura.trigueirao</p>
              </div>
              <div>
                <p className="font-cursive">Email</p>
                <p>@laura.trigueira</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
