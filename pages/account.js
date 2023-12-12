import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Account() {
  const userInfo = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    joinDate: '2021-01-01',
    totalExpenses: '$5,000',
    totalCategories: 5,
    profilePicture: '/path-to-your-profile-image.jpg' 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 dark:from-blue-800 dark:to-teal-600">
      <nav className="bg-white dark:bg-gray-800 shadow">
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16 mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Account Information
          </h1>
          <div className="text-center mb-6">
            <Image
              src="/images/defaultprofile.jpg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{userInfo.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>{userInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Join Date:</span>
              <span>{userInfo.joinDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total Expenses:</span>
              <span>{userInfo.totalExpenses}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total Categories Tracked:</span>
              <span>{userInfo.totalCategories}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
