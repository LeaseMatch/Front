import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PropertiesRegistration from './components/PropertiesRegistration';
// import PropertiesSearch from './components/PropertiesSearch';
import CustomersRegistration from './components/CustomersRegistration';
import PropertiesList from './components/PropertiesList';
import { useAuthenticator } from "@aws-amplify/ui-react";


const App: React.FC = () =>
{
  const { user, signOut } = useAuthenticator();
  return (
    <Router>
      <Navigation />
      <div style={{ paddingTop: '3.5rem' }}>
        <h1>{user?.signInDetails?.loginId}'s todos</h1>
        {/* Ensures content does not overlap the navbar */}
        <Routes>
          <Route path="/properties/registration" element={<PropertiesRegistration />} />
          <Route path="/properties/search" element={<PropertiesList />} />
          <Route path="/customers/registration" element={<CustomersRegistration />} />
        </Routes>
        <button onClick={signOut}>Sign out</button>
      </div>
    </Router>
  );
};

export default App;
