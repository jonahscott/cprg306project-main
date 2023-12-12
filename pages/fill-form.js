import React, { useState } from 'react';
import Link from 'next/link';

export default function FillForm() {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ amount: '', category: '', date: '' }); // Reset form after submission
  };

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

      <main className="flex items-center justify-center py-12 min-h-screen">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Expense Entry Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm text-gray-600 dark:text-gray-200">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount in USD"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm text-gray-600 dark:text-gray-200">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              >
                <option value="">Select Category</option>
                <option value="bills">Bills</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="misc">Miscellaneous</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-sm text-gray-600 dark:text-gray-200">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Submit Expense
            </button>
          </form>

          {/* Display submitted data */}
          {submittedData.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Submitted Expenses:</h2>
              <ul>
                {submittedData.map((data, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-200 mt-2">
                    {`Amount: ${data.amount}, Category: ${data.category}, Date: ${data.date}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
