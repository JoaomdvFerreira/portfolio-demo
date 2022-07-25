import Image from 'next/image';

export const Desktop: React.FC = () => {
  return (
    <>
      <section className="h-screen bg-beige sm:h-full">
        <div className="h-full py-16 flex flex-col relative sm:py-28 sm:pl-16">
          <div>
            <p className="text-3xl text-end mb-16 sm:text-6xl">
              LET´S START OUR WORK <span className="text-blue">TOGETHER.</span>
            </p>
          </div>
          {/* Desktop */}
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
              <p className="font-cursive text-6xl">My name is Laura.</p>
            </div>
          </div>
          <div className="py-24 relative hidden sm:block">
            <p className="text-2xl mb-2">
              PRODUCT <br />
              PHOTOGRAPHY
            </p>
            <p className="">
              A passionate photographer who tells st
              <br />
              ory's. A passionate phhotographer who tells <br /> story's. A
              passionate photographer who tells story's. A passionate
              photographer who <br />
              tells story's. A passionate photographer who tells story's. A
              passionate photographer who <br />
              tells story's.
            </p>
            <button className="mt-6 font-cursive text-2xl text-blue font-bold">
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
            Portfolio Photography <span className="text-gold">bla bla</span>
          </p>
          <p>
            Portfolio Photography{' '}
            <span className="text-lightGold">bla bla</span>
          </p>
          <p>
            Portfolio Photography <span className="text-brown">bla bla</span>
          </p>
          <p>
            Portfolio Photography{' '}
            <span className="text-lightBrown">bla bla</span>
          </p>
          <p>
            Portfolio Photography <span className="text-uknowkn">bla bla</span>
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
              PRODUCT <br />
              PHOTOGRAPHY
            </p>
          </div>
          <div className="hidden sm:block sm:pl-16">
            <p className="text-2xl">
              PRODUCT <br />
              PHOTOGRAPHY
            </p>
            <p className="py-4">
              A passionate photographer who tells st
              <br />
              ory's. A passionate phhotographer who tells <br /> story's. A
              passionate photographer who tells story's. A passionate
              photographer who tells story's. A <br />
              passionate photographer who tells story's. A passionate
              photographer who tells story's. A passionate photographer
              <br />
              who tells story's. A passionate photographer who tells story's. A
              passionate photographer who tells story's.
            </p>
            <button className="font-cursive text-2xl text-blue font-bold">
              More Portfolio
            </button>
            <div className="relative">
              <div className="absolute right-0 top-20">
                <p className="text-4xl text-gray">
                  SOME PEOPLE <br />
                  TELL <span className="ml-3">GOOD THINGS ABOUT ME</span> <br />
                </p>
              </div>
              <div className="absolute right-0 top-44">
                <p className="text-blue text-4xl mt-4">BELIEVE THEM :) </p>
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
            <div className="absolute flex gap-6 text-uknowkn top-2/4 mx-24">
              <div>
                <p className="font-cursive">Maria do Pomar</p>
                <p>
                  You finally found me! :) Ive been waiting for you... <br /> A
                  Laura é uma pessoa linda maravilhosa bla bla bla bla bla
                </p>
              </div>
              <div>
                <p className="font-cursive">Maria do Pomar</p>
                <p>
                  You finally found me! :) Ive been waiting for you... <br /> A
                  Laura é uma pessoa linda maravilhosa bla bla bla bla bla
                </p>
              </div>
              <div>
                <p className="font-cursive">Maria do Pomar</p>
                <p>
                  You finally found me! :) Ive been waiting for you... <br /> A
                  Laura é uma pessoa linda maravilhosa bla bla bla bla bla
                </p>
              </div>
            </div>
          </div>
          <div className="m-24 text-center text-4xl text-blue">
            <p className="font-cursive">
              Aqui vai ficar uma quote sobre a arte de fotografar, sobre a{' '}
              <br /> visão da Laura. A forma omo ela vê as cores, como as <br />
              sente, como as consegue identificar pelo cheiro. A forma como{' '}
              <br />
              ela usa todos os sentidos para apurar a sua arte.
            </p>
          </div>
          <div className="mb-24">
            <p className="text-center mb-6 text-3xl">CONTACT ME:</p>
            <div className="flex justify-around text-center">
              <div>
                <p className="font-cursive text-lg">Instagram</p>
                <p>@laura.trigueirao</p>
              </div>
              <div>
                <p className="font-cursive text-lg">Behance</p>
                <p>@laura.trigueirao</p>
              </div>
              <div>
                <p className="font-cursive text-lg">Email</p>
                <p>@laura.trigueira</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
