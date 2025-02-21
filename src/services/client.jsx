import axios from 'axios';

const LINK = import.meta.env.LINK;


const registerClient = async (clientData) => {
    console.log('Sending client data:', clientData);

    try {
        const response = await axios.post(
            `https://sodaalamoapp.onrender.com/client/register`, clientData);
        return response.data;
    } catch (error) {
        console.error("Error response:", error.response);
        throw error.response?.data || { message: "Error al registrar el cliente" };
    }
};

const loginClient = async (loginData) => {
    try {
        const response = await axios.post(`https://sodaalamoapp.onrender.com/client/login`, loginData);
        sessionStorage.setItem('clientName', response.data.clientName);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al iniciar sesión" };
    }
};




const getAllClients = async () => {
    try {
        const response = await axios.get(`https://sodaalamoapp.onrender.com/client/register`, clientData);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los clientes:", error.response || error);
        throw error.response?.data || { message: "Error al obtener los clientes" };
    }
};

export const getClientById = async (clientId) => {
    const codedToken = sessionStorage.getItem("token");
    if (!codedToken) {
        throw new Error("Token not found in sessionStorage");
    }

    try {
        const response = await axios.get(`https://sodaalamoapp.onrender.com/client/${clientId}`, {
            headers: {
                Authorization: `Bearer ${codedToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in getClientById:", error.response?.data || error.message);
        throw error.response?.data || { message: "Error al obtener el cliente" };
    }
};


const updateClient = async (id, clientData) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in sessionStorage");
    }
    
    try {
        const response = await axios.put(`https://sodaalamoapp.onrender.com/client/${clientId}`, clientData, {
            headers: {
                Authorization: `Bearer ${token}`, // Include token
                "Content-Type": "application/json",
            },
        });
        return response.data; // Ensure this returns data

    } catch (error) {
        console.error("Error in updateClient:", error.response?.data || error);
        throw error.response?.data || error;
    }
};

const deleteClient = async (id) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        throw new Error("Token not found in sessionStorage");
    }

    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/client/${clientId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include token
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in deleteClient:", error.response?.data || error);
        throw error.response?.data || error;
    }
};


export { registerClient, loginClient, getAllClients, updateClient, deleteClient };