import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import NetworkForm from "./components/NetworkForm";
import Login from "./components/Login";
import "./i18n";
import Register from "./components/Register";

const App: React.FC = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<{ email: string; isLoggedIn: boolean }>({
    email: "",
    isLoggedIn: false,
  });

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header user={user} setUser={setUser} />{" "}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/add-network" element={<NetworkForm />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
