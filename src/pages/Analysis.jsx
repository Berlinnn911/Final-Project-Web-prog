
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Analysis() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",

      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
        ],

        datasets: [
          {
            label: "Demo WW3 Risk (%)",
            data: [10, 12, 18, 14, 20, 15],
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            tension: 0.4,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          y: {
            min: 0,
            max: 100,
            title: {
              display: true,
              text: "Probability (%)",
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center display-5 fw-bold mb-4">
        Risk Analysis
      </h1>

      <div className="dashboard-card">
        <div style={{ height: "400px" }}>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>

      <div className="dashboard-card mt-4">
        <h3>Risk Factors</h3>
        <ul>
          <li>International military conflicts</li>
          <li>Nuclear threats</li>
          <li>NATO and international tensions</li>
          <li>Diplomatic relations</li>
        </ul>
      </div>
    </div>
  );
}

export default Analysis;
