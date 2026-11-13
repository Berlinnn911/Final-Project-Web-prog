
import { Navbar } from "react-bootstrap";
import { FaExclamationTriangle, FaGlobe, FaChartLine } from "react-icons/fa";

function Home() {
  const probability = 15;

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <p className="text-danger fw-bold">GLOBAL CONFLICT MONITOR</p>
        

        <h1 className="display-4 fw-bold">
          World War 3 Risk Dashboard
        </h1>

        <p className="text-secondary">
          Monitoring global tensions and international conflicts.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="panel text-center">
            <FaExclamationTriangle className="text-danger fs-1 mb-3" />

            <h3>WW3 Probability</h3>

            <h1 className="score">
              {probability}%
            </h1>

            <div className="progress mt-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: `${probability}%` }}
              ></div>
            </div>

            <p className="mt-3 text-secondary">
              Demo estimate — not a scientific forecast.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="panel">
            <FaGlobe className="text-danger fs-1 mb-3" />

            <h3>Global Risk Level</h3>

            <h2 className="text-warning mt-3">Moderate</h2>

            <p className="text-secondary mt-3">
              International tensions, military conflicts and
              diplomatic relations are monitored as risk factors.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="panel">
            <FaChartLine className="text-danger fs-1 mb-3" />

            <h3>About the Dashboard</h3>

            <p className="text-secondary">
              This application provides an overview of geopolitical
              news and a demonstration risk indicator.
              The probability shown is predefined for this project
              and does not represent a real prediction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
