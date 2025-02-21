import axios from 'axios';

const postDish = async (dishData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/dish", dishData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear el platillo" };
    }
};

const getDish = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/dish");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener platillos" };
    }
};

const getDishById = async (id) => {
    try {
        const response = await axios.get(`https://sodaalamoapp.onrender.com/dish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener platillo" };
    }
};

const updateDish = async (id, updatedData) => {
    try {
        const response = await axios.put(`https://sodaalamoapp.onrender.com/dish/${id}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el platillo" };
    }
};

const deleteDish = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/dish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el platillo" };
    }
};

export { postDish, getDishById, getDish, updateDish, deleteDish };
