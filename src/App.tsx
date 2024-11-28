import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PropertiesRegistration from './components/PropertiesRegistration';
import ClientsRegistration from './components/ClientsRegistration';
import PropertiesList from './components/PropertiesList';
import { useAuthenticator } from "@aws-amplify/ui-react";


const App: React.FC = () =>
{
  const { user, signOut } = useAuthenticator();
  return (
    <Router>
      <div className='frame'>

        <div className='contenedor'>
          <Navigation />
          <div className='marco-pagina'>
            <div className='header-user'>
              <h3>User: {user?.signInDetails?.loginId} </h3><button className='button-out' onClick={signOut}>Sign out</button>
            </div>
            <Routes>
              <Route path="/properties/registration" element={<PropertiesRegistration />} />
              <Route path="/properties/search" element={<PropertiesList />} />
              <Route path="/clients/registration" element={<ClientsRegistration />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router >
  );
};

export default App;
