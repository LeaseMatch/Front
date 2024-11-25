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
      <div className='frame'>
        <div className='frame-header'>
          <h1>User: {user?.signInDetails?.loginId} </h1><button className='button-out' onClick={signOut}>Sign out</button>
        </div>
        <div className='contenedor'>
          <Navigation />
          <Routes>
            <Route path="/properties/registration" element={<PropertiesRegistration />} />
            <Route path="/properties/search" element={<PropertiesList />} />
            <Route path="/customers/registration" element={<CustomersRegistration />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
};

export default App;
