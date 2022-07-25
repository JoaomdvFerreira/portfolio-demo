import Image from 'next/image';

export const Mobile: React.FC = () => {
  return (
    <>
      <section className="h-screen bg-beige">
        <div className="h-full py-16 flex flex-col relative">
          <div>
            <p className="text-3xl text-end mb-16">
              LET´S START OUR WORK <span className="text-blue">TOGETHER.</span>
            </p>
          </div>
          <div className="flex justify-end relative mb-6">
            <Image
              src={'/images/second_section1.jpg'}
              width={150}
              height={150}
            />
            <Image
              src={'/images/second_section2.jpg'}
              width={150}
              height={150}
            />
            <p className="absolute -bottom-3 left-12">
              Let me introduce myself properly.
            </p>
          </div>
          <div className="text-center flex flex-col justify-between h-full">
            <p className="font-cursive text-5xl font-bold text-gray">
              My name is Laura.
            </p>
            <p className="text-2xl">PRODUCT PHOTOGRAPHY</p>
            <p className="px-8">
              A passionate photographer who tells st
              <br />
              ory's. A passionate phhotographer who tells <br /> story's. A
              passionate photographer who tells story's. A passionate
              photographer who tells story's. A passionate photographer who
              tells story's. A passionate photographer who tells story's.
            </p>
            <button className="font-cursive text-4xl text-blue font-bold">
              Read Me
            </button>
          </div>
        </div>
      </section>
      <section className="h-full bg-white relative">
        <div className="leading-9 text-3xl p-14 text-center">
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
        <div className="grid grid-cols-2">
          <Image
            src={'/images/third_section1.jpg'}
            width={250}
            height={200}
          ></Image>
          <Image
            src={'/images/third_section2.jpg'}
            width={200}
            height={200}
          ></Image>
          <Image
            src={'/images/third_section3.jpg'}
            width={200}
            height={200}
          ></Image>
          <Image
            src={'/images/third_section4.jpg'}
            width={200}
            height={200}
          ></Image>
          <Image
            src={'/images/third_section5.jpg'}
            width={200}
            height={200}
          ></Image>
          <Image
            src={'/images/third_section6.jpg'}
            width={200}
            height={200}
          ></Image>
        </div>
        <div className="text-center flex flex-col justify-between py-10">
          <p className="text-2xl">PRODUCT PHOTOGRAPHY</p>
          <p className="px-8 my-5">
            A passionate photographer who tells st
            <br />
            ory's. A passionate phhotographer who tells <br /> story's. A
            passionate photographer who tells story's. A passionate photographer
            who tells story's. A passionate photographer who tells story's. A
            passionate photographer who tells story's. A passionate photographer
            who tells story's. A passionate photographer who tells story's.
          </p>
          <button className="font-cursive text-4xl text-blue font-bold">
            More Portfolio
          </button>
        </div>
      </section>
      <section className="h-screen bg-beige">
        <div className="relative">
          <div className="p-8">
            <p className="text-4xl text-gray">
              SOME PEOPLE <br />
              TELL <span className="ml-3">GOOD THINGS ABOUT ME</span> <br />
            </p>
            <p className="text-blue text-end text-4xl mt-4">BELIEVE THEM :) </p>
          </div>
          <div className="relative">
            <Image
              src={'/images/fourth_section1.jpg'}
              width={400}
              height={400}
            />
            <div className="absolute flex gap-6 text-uknowkn top-1/4 mx-6">
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
          <div className="p-6 text-center">
            <p className="font-cursive">
              Aqui vai ficar uma quote sobre a arte de fotografar, sobre a{' '}
              <br /> visão da Laura. A forma omo ela vê as cores, como as <br />
              sente, como as consegue identificar pelo cheiro. A forma como{' '}
              <br />
              ela usa todos os sentidos para apurar a sua arte.
            </p>
          </div>
          <div>
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
