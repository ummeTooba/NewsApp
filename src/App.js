import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./news components/Navbar";
import News from "./news components/News";

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
