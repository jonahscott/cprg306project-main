import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const quote = "Investing in your financial knowledge always pays the best interest.";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 dark:from-blue-800 dark:to-teal-600">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700 dark:text-white">
              FinanceTrack
            </div>
            <div className="flex space-x-4">
              <Link legacyBehavior href="/review">
                <a className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  Review Expenses
                </a>
              </Link>
              <Link legacyBehavior href="/fill-form">
                <a className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  Fill Form
                </a>
              </Link>
              <Link legacyBehavior href="/account">
                <a className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                  Account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to FinanceTrack
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Track your expenses effortlessly and make informed financial decisions.
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/money-bag.png" 
            alt="FinanceTrack Logo"
            width={200}
            height={200}
          />
        </div>

        <p className="text-md italic text-gray-200">
          "{quote}"
        </p>
      </main>
    </div>
  );
}
