import axios from 'axios';

const postDrink = async (drinkData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/drink", drinkData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear bebida" };
    }
};

const getDrink = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/drink");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener bebidas" };
    }
};

const putDrink = async (id, datos) => {
    try {
        const response = await axios.put(`https://sodaalamoapp.onrender.com/drink/${id}`, datos);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al editar bebida" };
    }
};

const deleteDrink = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/drink/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar bebida" };
    }
};

export { postDrink, getDrink, putDrink, deleteDrink };
