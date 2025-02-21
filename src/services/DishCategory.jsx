import axios from 'axios';

const postDishCategory = async (dishCategoryData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/dishC", dishCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear categoria" };
    }
};

const getDishCategory = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/dishC");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener categoria" };
    }
};

const deleteDishCategory = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/dishC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" };
    }
};

export { postDishCategory, getDishCategory, deleteDishCategory };
