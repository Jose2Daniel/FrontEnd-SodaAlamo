import axios from 'axios';

const LINK = import.meta.env.VITE_API_LINK;

const postDrinkCategory = async (drinkCategoryData) => {
    try {
        const response = await axios.post(`${LINK}/drinkC`, drinkCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al crear categoria "};
    }
};


const getDrinkCategory = async (drinkCategoryData) => {
    try{
        const response = await axios.get(`${LINK}/drinkC`);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al obtener categoria "}
    }
};

const deleteDrinkCategory = async (id) => {
    try {
        const response = await axios.delete(`${LINK}/drinkC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" }
    }
};


export {postDrinkCategory, getDrinkCategory, deleteDrinkCategory};