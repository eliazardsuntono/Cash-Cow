import React from "react";
import ReactDOM from "react-dom/client";
import LoanPage from "./Loan.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-backgroundGreen">
      <LoanPage />
    </div>
  </React.StrictMode>
);
