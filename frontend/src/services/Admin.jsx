import axios from 'axios';

const registerAdmin = async (adminData) => {
    console.log('Sending client data:', adminData);

    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/admin/adminRegister", adminData);
        return response.data;
    } catch (error) {
        console.error("Error response:", error.response);
        throw error.response?.data || { message: "Error al registrar el cliente" };
    }
};

const loginAdmin = async (loginData) => {
    try {
        const response = await axios.post("https://sodaalamoapp.onrender.com/admin/adminLogin", loginData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al iniciar sesión" };
    }
};

const getAllAdmins = async () => {
    try {
        const response = await axios.get("https://sodaalamoapp.onrender.com/admin");
        return response.data;
    } catch (error) {
        console.error("Error al obtener los clientes:", error.response || error);
        throw error.response?.data || { message: "Error al obtener los clientes" };
    }
};

const getAdminById = async (id) => {
    try {
        const response = await axios.get(`https://sodaalamoapp.onrender.com/admin/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener el cliente" };
    }
};

const updateAdmin = async (id, updatedData) => {
    try {
        const response = await axios.put(`https://sodaalamoapp.onrender.com/admin/${id}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el cliente" };
    }
};

const deleteAdmin = async (id) => {
    try {
        const response = await axios.delete(`https://sodaalamoapp.onrender.com/admin/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el cliente" };
    }
};

export { registerAdmin, loginAdmin, getAdminById, getAllAdmins, updateAdmin, deleteAdmin };
