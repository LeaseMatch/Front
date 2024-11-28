import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';
import { useAuthenticator } from "@aws-amplify/ui-react";

const HeaderNavBar: React.FC = () => {
  const { user, signOut } = useAuthenticator();
  const userEmail = user?.signInDetails?.loginId; // Replace with dynamic email if available

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoText}>
          LeaseMatch
        </Link>
      </div>
      <div style={styles.rightContainer}>
        <span style={styles.icon}>{userEmail}</span> {/* Example globe icon */}
        <ProfileDropdown onLogout={signOut} />
      </div>
    </header>
  );
};

// Header styles
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default HeaderNavBar;
