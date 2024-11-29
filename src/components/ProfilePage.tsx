import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthenticator } from "@aws-amplify/ui-react";

interface ClientData {
  id: string;
  country: string;
  city: string;
  type: string;
  document: string;
  email: string;
  telephone: string;
}

const ProfilePage: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [_ , setClientData] = useState<ClientData | null>(null);
  const [formData, setFormData] = useState<ClientData>({
    id: '',
    country: '',
    city: '',
    type: '',
    document: '',
    email: '',
    telephone: ''
  });
  const [_, setLoading] = useState<boolean>(true);
  const [_, setError] = useState<string | null>(null);

  // Fetch client data from the API
  const fetchClientData = async () => {
    try {
      const response = await axios.get(
        'https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/clients?userId=44f8a418-20f1-70f0-d183-f1e0196eab1e'
      );
      setClientData(response.data);
      setFormData(response.data); // Populate form with fetched data
    } catch (err) {
      setError('Failed to fetch client data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Submit the updated data
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(
        'https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/clients',
        {
          ...formData,
          id: user?.attributes?.sub
        }
      );
      alert('Data successfully updated');
    } catch (err) {
      setError('Failed to update the data. Please try again.');
    }
  };

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            style={styles.input}
            disabled
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="type">Document Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="document">Document:</label>
          <input
            type="text"
            id="document"
            name="document"
            value={formData.document}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

// Styling for the form
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProfilePage;
