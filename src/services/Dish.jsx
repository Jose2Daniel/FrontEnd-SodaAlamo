import axios from 'axios';

const LINK = import.meta.env.VITE_API_LINK;

const postDish = async (dishData) => {
    try {
        const response = await axios.post(`${LINK}/dish`, dishData);
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Error al crear el platillo"}
    };
};

const getDish = async () => {
    try {
        const response = await axios.get(`${LINK}/dish`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener platillos"};
    };
};

const getDishById = async (id) => {
    try {
        const response = await axios.get(`${LINK}/dish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al obtener platillo " }
    };
};

const updateDish = async (id) => {
    try {
        const response = await axios.put(`${LINK}/dish/${id}`);
        return response.data;   
    } catch (error) {
        throw error.response?.data || { message: " Error al actualizar el platillo "};
    };
};

const deleteDish = async (id) => {
    try {
        const response = await axios.delete(`${LINK}/dish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al eliminar el platillo "};
    };
};

export { postDish, getDishById, getDish, updateDish, deleteDish };