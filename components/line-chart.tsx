"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  prices: number[];
  indexes: string[];
  name: string;
  isProfit: boolean;
}

const LineChart = ({ prices, indexes, name, isProfit }: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        // Create a new chart instance
        chartInstanceRef.current = new Chart(ctx, {
          type: "line", // Change type to 'area'
          data: {
            labels: indexes,
            datasets: [
              {
                label: "Prices",
                data: prices,
                backgroundColor: isProfit ? "rgba(78, 179, 75, 1)" : "rgba(232, 77, 77, 1)", 
                borderColor: "rgba(3, 0, 66, 1)",
                tension: 0.1,
                fill: true, 
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: `${name}'s stocks`,
                color: "rgba(3, 0, 66 , 1)",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                border: {
                  display: false,
                },
                grid: {
                  color: "hsla(243, 5%, 95.65%)",
                },
              },
              x: {
                type: "category",
                border: {
                  display: false,
                },
                grid: {
                  color: "hsla(243, 5%, 95.65%)",
                },
              },
            },
          },
        });
      }
    }

    // Clean up function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [prices, indexes, name, isProfit]);

  return <canvas ref={chartRef} className="bg-secondary" />;
};

export default LineChart;