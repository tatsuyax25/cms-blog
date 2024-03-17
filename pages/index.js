import Head from "next/head";

const posts = [
  { title: 'React Testing', excerpt: 'Learn how to test React Components' },
  { title: 'React With Tailwind', excerpt: 'Learn how to add Tailwind to React' }
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Dev Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      </div>

    </div>
  );
}
