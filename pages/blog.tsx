import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Blog: NextPage = () => {
  const router = useRouter();

  return (
    <section className="h-screen bg-beige sm:h-full">
      <div className="h-full py-16 flex flex-col relative sm:py-28 sm:pl-16">
        <div>
          <p className="font-cursive text-lg">I'm a Blog Page</p>
          <button onClick={() => router.push('/')}>Go Back</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
