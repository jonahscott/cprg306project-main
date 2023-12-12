import Link from 'next/link';

export default function FillForm() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 dark:from-blue-800 dark:to-teal-600">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link legacyBehavior href="/">
              <a className="text-xl font-semibold text-gray-700 dark:text-white">
                FinanceTrack
              </a>
            </Link>
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
            </div>
          </div>
        </div>
      </nav>

      <main className="flex items-center justify-center py-12 min-h-screen">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Expense Entry Form
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm text-gray-600 dark:text-gray-200">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount in USD"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm text-gray-600 dark:text-gray-200">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
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
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Submit Expense
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}