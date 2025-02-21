import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from "../pages/Login";
import register from "../pages/Register";
import home from "../pages/Home";
import aboutUs from "../pages/AboutUs";
import contacto from "../pages/Contacto";
import menu from "../pages/Menu";
import order from "../pages/Order";
import user from "../pages/User";
import almacen from "../components/Almacen";
import ordenes from "../components/Ordenes";
import clientes from "../components/Clientes";
import opciones from "../components/Opciones";
import ProtectedRoute from "../routes/ProtectedRoute";
import adminPage from "../pages/Admin";




const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<register />} />
        <Route path="/login" element={<login />} />
        <Route path="/home" element={<home />} />
        <Route path="/aboutUs" element={<aboutUs />} />
        <Route path="/contacto" element={<contacto />} />
        <Route path="/menu" element={<menu />} />
        <Route path="/order" element={<order />} />

        {/* Ruta protegida para Admin */}
        <Route 
          path="/admin" 
          element={<ProtectedRoute allowedRole="admin" />}
        >
          <Route path="" element={<adminPage />}>
            <Route path="almacen" element={<almacen />} />
            <Route path="ordenes" element={<ordenes />} />
            <Route path="clientes" element={<clientes />} />
            <Route path="opciones" element={<opciones />} />
          </Route>
        </Route>
        
        {/* Ruta pública para usuarios */}
        <Route path="/user" element={<user />} />
      </Routes>
    </Router>
  );
};

export default Routing;
