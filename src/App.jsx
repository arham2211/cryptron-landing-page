import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./routes/Dashboard";
import Transaction from "./routes/Transaction";
import Wallet from "./routes/Wallet";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <Router>
      <div className="app-container h-screen">
        {/* Header */}
        <Header
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <div className="md:flex md:overflow-hidden">
          {/* Sidebar */}
          {isSidebarVisible && (
            <aside>
              <Sidebar isVisible={isSidebarVisible} />
            </aside>
          )}

          <div className="flex flex-col flex-1 bg-[#191919] overflow-hidden">
            {/* Routes/Content */}
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/history" element={<Transaction />} />
                <Route path="/wallet" element={<Wallet />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
