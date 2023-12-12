import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Link from 'next/link';

export default function Review({ formData }) {
  // Prepare chart data based on formData
  const categories = ['Bills', 'Food', 'Transport', 'Entertainment', 'Misc'];
  const categoryData = categories.map(category => {
    const total = formData
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    return total;
  });

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-300 dark:from-blue-800 dark:to-teal-600">
      {/* Navigation code */}
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Expense Review
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
          <Bar data={data} options={options} />
        </div>
      </main>
    </div>
  );
}
