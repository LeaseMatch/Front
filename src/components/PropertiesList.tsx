import axios from "axios";
import React, { useState } from "react";


interface Property
{
    id: string;
    pais: string;
    ciudad: string;
    tipo_propiedad: string;
    area: string;
    habitaciones: string;
    banos: string;
    precio: string;
    capacidad: string;
    image: string;
    Amenidades: string;
}
const PropertiesList: React.FC = () =>
{
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>("");

    const fetchProperties = async () =>
    {
        setLoading(true);
        setError(null);
        try
        {
            const response = await axios.get(`https://yduv27basj.execute-api.us-east-1.amazonaws.com/prod/properties`, {
                params: { search: query },
            });
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
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Property Search</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by city or type..."
                    style={{
                        padding: "10px",
                        width: "300px",
                        marginRight: "10px",
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
                        backgroundColor: "#007BFF",
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
                            alt={property.tipo_propiedad}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "10px" }}>
                            <h3>{property.tipo_propiedad}</h3>
                            <p>
                                <strong>Location:</strong> {property.ciudad}, {property.pais}
                            </p>
                            <p>
                                <strong>Price:</strong> {property.precio}
                            </p>
                            <p>
                                <strong>Area:</strong> {property.area} sq. ft.
                            </p>
                            <p>
                                <strong>Rooms:</strong> {property.habitaciones} |{" "}
                                <strong>Bathrooms:</strong> {property.banos}
                            </p>
                            <p>
                                <strong>Capacity:</strong> {property.capacidad} people
                            </p>
                            <p>
                                <strong>Amenities:</strong> {property.Amenidades}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertiesList;
