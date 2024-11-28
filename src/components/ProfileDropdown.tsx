import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProfileDropdownProps {
  onLogout: () => void; // Log out function passed as prop
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={styles.container}>
      {/* Button with Menu Icon and Avatar */}
      <button onClick={toggleDropdown} style={styles.button}>
        <span style={styles.icon}>☰</span>
        <span style={styles.avatar}>👤</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={styles.dropdown}>
          <div style={styles.dropdownItem}>
          <Link to="/profile">
                Profile
          </Link>
          </div>
          <div style={styles.dropdownItem}>offer prices</div>
          <div style={styles.dropdownItem} onClick={onLogout}>
            Log Out
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '16px',
    marginRight: '8px',
  },
  avatar: {
    fontSize: '18px',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    minWidth: '150px',
    zIndex: 1000,
    color: 'black'
  },
  dropdownItem: {
    padding: '10px 16px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    fontSize: '14px',
  },
  dropdownItemLast: {
    borderBottom: 'none',
  },
};

export default ProfileDropdown;
