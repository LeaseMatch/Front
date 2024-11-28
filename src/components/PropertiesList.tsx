import axios from "axios";
import React, { useState } from "react";

interface Property
{
    id: string;
    country: string;
    city: string;
    property_type: string;
    area: string;
    rooms: string;
    bathrooms: string;
    price: string;
    capacity: string;
    image: string;
    availability: string;
    Amenities: string;
}

const PropertiesList: React.FC = () =>
{
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [cityQuery, setCityQuery] = useState<string>("");
    const [countryQuery, setCountryQuery] = useState<string>("");

    const fetchProperties = async () =>
    {
        setLoading(true);
        setError(null);
        try
        {
            const response = await axios.get(
                `https://12mo5zkgvg.execute-api.us-west-2.amazonaws.com/prod/properties`,
                {
                    params: {
                        city: cityQuery,
                        country: countryQuery,
                    },
                }
            );
            setProperties(response.data);
        } catch (err)
        {
            setError("Failed to fetch properties. Please try again.");
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <div className="marco-cliente">
            <h1>Property Search</h1>
            <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    value={cityQuery}
                    onChange={(e) => setCityQuery(e.target.value)}
                    placeholder="Search by city..."
                    style={{
                        padding: "10px",
                        width: "200px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />
                <input
                    type="text"
                    value={countryQuery}
                    onChange={(e) => setCountryQuery(e.target.value)}
                    placeholder="Search by country..."
                    style={{
                        padding: "10px",
                        width: "200px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />
                <button
                    onClick={fetchProperties}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "5px",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading properties...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {properties.map((property) => (
                    <div
                        key={property.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        <img
                            src={property.image}
                            alt={property.property_type}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "10px" }}>
                            <h3>{property.property_type}</h3>
                            <p>
                                <strong>Location:</strong> {property.city}, {property.country}
                            </p>
                            <p>
                                <strong>Price:</strong> {property.price}
                            </p>
                            <p>
                                <strong>Area:</strong> {property.area} sq. ft.
                            </p>
                            <p>
                                <strong>Rooms:</strong> {property.rooms} |{" "}
                                <strong>Bathrooms:</strong> {property.bathrooms}
                            </p>
                            <p>
                                <strong>Capacity:</strong> {property.capacity} people
                            </p>
                            <p>
                                <strong>Amenities:</strong> {property.Amenities}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertiesList;
