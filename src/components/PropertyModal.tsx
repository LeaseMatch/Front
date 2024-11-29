import React, { useEffect, useState } from 'react';
import { Property } from '../types/property.types';
import axios from 'axios';

type PropertyModalProps = {
  property: Property;
  onClose: () => void;
};

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [offerDetails, setOfferDetails] = useState<string>('');
  const [submittingOffer, setSubmittingOffer] = useState<boolean>(false);
  const [offerError, setOfferError] = useState<string | null>(null);

  // Fetch offers for the selected property when modal is opened
  useEffect(() => {
    const fetchOffers = async () => {
      try {

        const response = await axios.get(
          `https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/properties/${property.id}/offers`
        );
        console.log(response.data);
      } catch (err) {
        console.log('Failed to fetch offers. Please try again.');
      } finally {
        console.log(false);
      }
    };

    fetchOffers();
  }, [property.id]);

  // Handle creating a new offer
  const handleCreateOffer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmittingOffer(true);
      await axios.post(
        `https://t1w0m0tqlg.execute-api.us-west-2.amazonaws.com/prod/properties/${property.id}/offers`,
        { details: offerDetails }
      );
      setOfferDetails('');
      setOfferError(null);
    } catch (err) {
      setOfferError('Offer Created Succesfully');
    } finally {
      setSubmittingOffer(false);
      onClose()
    }
  };

  return (
    <div className="modal-overlay" style={styles.modalOverlay}>
      <div className="modal-content" style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
        <h2>{property.property_type} - ${property.price}</h2>
        <p>{property.city}, {property.country}</p>

        {/* Display the property image */}
        <img 
          src={property.image} 
          alt={`${property.property_type} in ${property.city}`} 
          style={styles.image} 
        />

        <h3>Property Details</h3>
        <p><strong>Area:</strong> {property.area} sqft</p>
        <p><strong>Rooms:</strong> {property.rooms}</p>
        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p><strong>Capacity:</strong> {property.capacity}</p>

        <h3>Create a New Offer</h3>
        <form onSubmit={handleCreateOffer} style={styles.form}>
          <textarea
            value={offerDetails}
            onChange={(e) => setOfferDetails(e.target.value)}
            placeholder="Enter offer details"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.submitButton} disabled={submittingOffer}>
            {submittingOffer ? 'Submitting...' : 'Submit Offer'}
          </button>
          {offerError && <p style={styles.error}>{offerError}</p>}
        </form>
      </div>
    </div>
  );
};

// Styling for the modal, including the image and form elements
const styles: { [key: string]: React.CSSProperties } = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
    overflowY: 'auto',
    maxHeight: '90vh',
  },
  closeButton: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    float: 'right',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  form: {
    marginTop: '20px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default PropertyModal;
