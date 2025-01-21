import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Matomo from './utils/Matomo';
import Footer from './components/Footer';

function App() {
  return (
    <main role="main" className="bg-stone-100 min-h-screen p-4">
      <Matomo />
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
