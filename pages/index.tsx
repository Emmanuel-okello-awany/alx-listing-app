import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A modern Airbnb clone" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to ALX Listing App</h1>
        <p className="mt-4 text-lg text-gray-600">Scaffolding ready. Start building!</p>
      </main>
    </div>
  );
}
