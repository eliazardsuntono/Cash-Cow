import {useEffect, useState} from 'react'
import axios from "axios";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Account from "./pages/account";
import Ranking from "./pages/rankings";
import Balance from "./pages/balance";

axios.defaults.baseURL ="http://localhost:8000"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rankings" element={<Ranking />} />
          <Route path="/account" element={<Account />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App