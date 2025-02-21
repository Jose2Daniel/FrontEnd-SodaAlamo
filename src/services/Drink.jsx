import axios from 'axios';

const LINK = import.meta.env.LINK;

const postDrink = async (drinkData) => {
    try {
        const response = await axios.post(`${LINK}/drink`, drinkData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al crear bebida "};
    };
};

const getDrink = async () => {
    try {
        const response = await axios.get(`${LINK}/drink`)
        return response.data
    } catch (error) {
        throw error.response?.data || { message: " Error al obtener bebidas "};
    };
};

const putDrink = async (id, datos) => {
    try {
        const response = await axios.put(`${LINK}/drink/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al editar categoria "}
    }
}

const deleteDrink = async (id) => {
    try {
        const response = await axios.delete(`${LINK}/drink/${id}`);
        return response.data
    } catch (error) {
        throw error.response?.data || { message: " Error al eliminar categoria "};
    };
};

export {postDrink, getDrink, putDrink, deleteDrink};
