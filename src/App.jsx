import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleFinishSplash = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={handleFinishSplash} />
      ) : (
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
