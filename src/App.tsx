import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PropertiesRegistration from './components/PropertiesRegistration';
import PropertiesSearch from './components/PropertiesSearch';
import CustomersRegistration from './components/CustomersRegistration';
import { useAuthenticator } from "@aws-amplify/ui-react";

const { user, signOut } = useAuthenticator();
const App: React.FC = () =>
{
  return (
    <Router>
      <Navigation />
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <div style={{ paddingTop: '3.5rem' }}>
        {/* Ensures content does not overlap the navbar */}
        <Routes>
          <Route path="/properties/registration" element={<PropertiesRegistration />} />
          <Route path="/properties/search" element={<PropertiesSearch />} />
          <Route path="/customers/registration" element={<CustomersRegistration />} />
        </Routes>
      </div>
      <button onClick={signOut}>Sign out</button>
    </Router>
  );
};

export default App;
