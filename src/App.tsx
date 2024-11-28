import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertiesList from './components/PropertiesList';
import ProfilePage from './components/ProfilePage'
import HeaderNavBar from './components/HeaderNavBar';



const App: React.FC = () =>
{
 
  return (   
    <Router>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<PropertiesList />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router >

  );
};

export default App;
