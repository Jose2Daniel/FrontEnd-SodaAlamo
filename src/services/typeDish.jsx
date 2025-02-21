import axios from 'axios';

const createTypeDish = async (typeDishData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/typeDish", typeDishData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear tipo de platillo" };
    }
};

const getTypeDish = async (id) => {
    try {
        const response = await axios.get(`https://sodaalamoapp.onrender.com/typeDish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener tipo" };
    }
};

const getAllTypeDish = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/typeDish");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener tipos de platillos" };
    }
};

const putTypeDish = async (id, typeDishData) => {
    try {
        const response = await axios.put(`https://sodaalamoapp.onrender.com/typeDish/${id}`, typeDishData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el tipo de platillo" };
    }
};

const deleteTypeDish = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/typeDish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar tipo de platillo" };
    }
};

export { createTypeDish, getTypeDish, getAllTypeDish, putTypeDish, deleteTypeDish };
