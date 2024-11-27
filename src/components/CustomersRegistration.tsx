import React, { useState } from "react";

interface ClientFormProps { }

const CustomersRegistration: React.FC<ClientFormProps> = () =>
{
    const [formData, setFormData] = useState({
        id: "",
        country: "",
        city: "",
        type: "",
        document: "",
        email: "",
        telephone: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        try
        {
            const response = await fetch("https://12mo5zkgvg.execute-api.us-west-2.amazonaws.com/prod/clients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok)
            {
                setStatus("Client created successfully!");
                setFormData({
                    id: "",
                    country: "",
                    city: "",
                    type: "",
                    document: "",
                    email: "",
                    telephone: "",
                });
            } else
            {
                const errorData = await response.json();
                setStatus(`Error: ${errorData.message || "Failed to create client"}`);
            }
        } catch (error)
        {
            if (error instanceof Error)
            {
                setStatus(`Error: ${error.message}`);
            } else
            {
                setStatus("An unknown error occurred");
            }
        }
    };

    return (
        <div>
            <h2>Create Client</h2>
            {status && <p>{status}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="document">Document:</label>
                    <input
                        type="text"
                        id="document"
                        name="document"
                        value={formData.document}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telephone">Telephone:</label>
                    <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Client</button>
            </form>
        </div>
    );
};

export default CustomersRegistration;

