// pages/fill-form.js
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function FillForm() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(amount);
    setAmount('');
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Fill Expense Form - FinanceTrack</title>
      </Head>

      <h1 className="text-2xl font-bold text-center mb-4">Fill Expense Form</h1>
      
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-6">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount Spent:</label>
          <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>

      <Link href="/">
        <a className="text-blue-600 hover:underline">Back to Home</a>
      </Link>
    </div>
  );
}
