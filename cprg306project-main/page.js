// pages/index.js
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <Head>
        <title>FinanceTrack</title>
      </Head>

      <h1 className="text-4xl font-bold mb-6">Welcome to FinanceTrack</h1>
      <p className="mb-4">Your personal finance tracking tool.</p>

      <div className="space-x-4">
        <Link href="/fill-form">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fill Form
          </a>
        </Link>
        <Link href="/review">
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Review Expenses
          </a>
        </Link>
      </div>
    </div>
  );
}
