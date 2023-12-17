import React from "react";

const metricsData = [
  {
    title: "Total Sales",
    value: "$9850.90",
    upward: true,
    percent: "1.8%",
  },
  {
    title: "Net Revenue",
    value: "$7520.50",
    upward: false,
    percent: "2.5%",
  },
  {
    title: "Customers",
    value: "1375",
    upward: true,
    percent: "5.2%",
  },
  {
    title: "MRR",
    value: "$250.00",
    upward: true,
    percent: "2.2%",
  },
];

export default function MetricsDefault() {
  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-6xl px-5 mx-auto my-28">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {metricsData.map((metrics, index) => (
              <div className="p-5 bg-white rounded shadow-sm" key={index}>
                <div className="text-base text-gray-400 ">{metrics.title}</div>
                <div className="flex items-center pt-1">
                  <div className="text-2xl font-bold text-gray-900 ">
                    {metrics.value}
                  </div>
                  <span
                    className={`flex items-center px-2 py-0.5 mx-2 text-sm rounded-full ${
                      metrics.upward
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                    }`}>
                    {metrics.upward && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18 15L12 9L6 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {!metrics.upward && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    <span>{metrics.percent}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}