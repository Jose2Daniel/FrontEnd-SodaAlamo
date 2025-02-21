import axios from 'axios';

const LINK = import.meta.env.LINK;

const postOrderDetail = async (orderDetailData) => {
    try {
        const response = await axios.post(`${'https://sodaalamoapp.onrender.com'}/orderDetail`, orderDetailData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear el detalle de la orden" };
    }
};

const getOrderDetail = async () => {
    try {
        const response = await axios.get(`${LINK}/orderDetail`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener los detalles de las órdenes" };
    }
};

const getOrderDetailById = async (id) => {
    try {
        const response = await axios.get(`${LINK}/orderDetail/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener el detalle de la orden" };
    }
};

const updateOrderDetail = async (id, orderDetailData) => {
    try {
        const response = await axios.put(`${LINK}/orderDetail/${id}`, orderDetailData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el detalle de la orden" };
    }
};

const deleteOrderDetail = async (id) => {
    try {
        const response = await axios.delete(`${LINK}/orderDetail/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el detalle de la orden" };
    }
};

export { postOrderDetail, getOrderDetailById, getOrderDetail, updateOrderDetail, deleteOrderDetail };
