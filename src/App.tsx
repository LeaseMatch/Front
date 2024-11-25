import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PropertiesRegistration from './components/PropertiesRegistration';
import CustomersRegistration from './components/CustomersRegistration';
import PropertiesList from './components/PropertiesList';
import { useAuthenticator } from "@aws-amplify/ui-react";


const App: React.FC = () =>
{
  const { user, signOut } = useAuthenticator();
  return (
    <Router>
      <div className='contenedormenu'>
        <h1>Authenticated User: {user?.signInDetails?.loginId} </h1>
        <Navigation />
        <Routes>
          <Route path="/properties/registration" element={<PropertiesRegistration />} />
          <Route path="/properties/search" element={<PropertiesList />} />
          <Route path="/customers/registration" element={<CustomersRegistration />} />
        </Routes>
        <button onClick={signOut}>Sign out</button>
      </div>
    </Router >
  );
};

export default App;
