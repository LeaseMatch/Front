import React, { useState } from 'react';
import { Property } from '../types/property.types';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  location: {
    fontSize: '14px',
    marginBottom: '12px',
    color: '#666',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#4caf50',
  },
  detail: {
    fontSize: '14px',
    marginBottom: '6px',
    color: '#444',
  },
  amenities: {
    fontSize: '13px',
    color: '#777',
    marginTop: '12px',
    lineHeight: '1.6',
  },
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={property.image} alt={property.property_type} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{property.property_type}</h2>
        <p style={styles.location}>
          {property.city}, {property.country}
        </p>
        <p style={styles.price}>${parseInt(property.price).toLocaleString()} / night</p>
        <p style={styles.detail}>
          <strong>Area:</strong> {property.area} m²
        </p>
        <p style={styles.detail}>
          <strong>Rooms:</strong> {property.rooms}, <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
        <p style={styles.detail}>
          <strong>Capacity:</strong> {property.capacity} guests
        </p>
        <p style={styles.amenities}>
          <strong>Amenities:</strong> {property.Amenities.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard