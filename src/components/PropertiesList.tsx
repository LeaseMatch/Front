import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Property } from '../types/property.types';
import PropertyCard from './PropiertieCard';
import PropertyModal from './PropertyModal';

const PropertiesList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to fetch properties, optionally filtered by city
  const fetchProperties = async (city: string = '') => {
    try {
      setLoading(true);
      const url = city
        ? `https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/properties?city=${city}`
        : `https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/properties`;

      const response = await axios.get(url);
      setProperties(response.data);
    } catch (err) {
      setError('Failed to fetch properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle property click - show modal
  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  // Fetch all properties when the component mounts
  useEffect(() => {
    fetchProperties();
  }, []);

  // Handle search submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchProperties(searchCity);
  };

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search by city..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>
          Search
        </button>
      </form>

      {/* Properties Grid */}
      <div style={styles.container}>
        {properties.map((property) => (
          <div key={property.id} onClick={() => handlePropertyClick(property)}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* Property Modal */}
      {isModalOpen && selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

// Styling for the component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    marginTop: '20px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  searchButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default PropertiesList;
