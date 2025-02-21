import axios from 'axios';

const LINK = import.meta.env.LINK;

const postDishCategory = async (dishCategoryData) => {
    try {
        const response = await axios.post(`${LINK}/dishC`, dishCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al crear categoria "};
    }
};


const getDishCategory = async (dishCategoryData) => {
    try{
        const response = await axios.get(`${LINK}/dishC`);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al obtener categoria "}
    }
};

const deleteDishCategory = async (id) => {
    try {
        const response = await axios.delete(`${LINK}/dishC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" }
    }
};

export {postDishCategory, getDishCategory, deleteDishCategory};