import axios from 'axios';

const postDrinkCategory = async (drinkCategoryData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/drinkC", drinkCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear categoria" };
    }
};

const getDrinkCategory = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/drinkC");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener categoria" };
    }
};

const deleteDrinkCategory = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/drinkC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" };
    }
};

export { postDrinkCategory, getDrinkCategory, deleteDrinkCategory };
