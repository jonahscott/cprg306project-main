// pages/review.js
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';

const Chart = dynamic(() => import('react-chartjs-2').then((mod) => mod.Chart), { ssr: false });

export default function Review() {
  // Dummy data for the chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Weekly Spending',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
    <div className="container mx-auto p-4">
      <Head>
        <title>Review Expenses - FinanceTrack</title>
      </Head>

      <h1 className="text-2xl font-bold text-center mb-4">Review Expenses</h1>
      
      <div className="mb-6">
        <Chart type="line" data={data} options={options} />
      </div>

      <Link href="/">
        <a className="text-blue-600 hover:underline">Back to Home</a>
      </Link>
    </div>
  );
}
