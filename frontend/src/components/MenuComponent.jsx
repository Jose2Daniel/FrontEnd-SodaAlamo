import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardMedia, CardContent, Button, Modal, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuComponent = () => {
    const [desayunoDishes, setDesayunoDishes] = useState([]);
    const [almuerzoDishes, setAlmuerzoDishes] = useState([]);
    const [cenaDishes, setCenaDishes] = useState([]);
    const [selectedDish, setSelectedDish] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedDrink, setSelectedDrink] = useState('');
    const [clientName, setClientName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get("https://sodaalamoapp.onrender.com/dish");
                const allDishes = Array.isArray(response.data) ? response.data : [];
                const Desayuno = [];
                const Almuerzo = [];
                const Cena = [];
                allDishes.forEach(dish => {
                    switch (dish.typeDish?.typeName) {
                        case 'Desayuno':
                            Desayuno.push(dish);
                            break;
                        case 'Almuerzo':
                            Almuerzo.push(dish);
                            break;
                        case 'Cena':
                            Cena.push(dish);
                            break;
                        default:
                            break;
                    }
                });
                setDesayunoDishes(Desayuno);
                setAlmuerzoDishes(Almuerzo);
                setCenaDishes(Cena);
    
                console.log("Desayunos:", Desayuno);
                console.log("Almuerzos:", Almuerzo);
                console.log("Cenas:", Cena);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };
        const fetchDrinks = async () => {
            try {
                const response = await axios.get("https://sodaalamoapp.onrender.com/drink");
                if (Array.isArray(response.data)) {
                    setDrinks(response.data);
                } else {
                    console.error('Respuesta de bebidas no es un arreglo:', response.data);
                    setDrinks([]);  // En caso de que la respuesta no sea válida
                }
            } catch (error) {
                console.error('Error fetching drinks:', error);
                setDrinks([]);  // En caso de error en la solicitud
            }
        };

        const fetchLoggedInUser = () => {
            const clientNameFromSession = sessionStorage.getItem('clientName');
            if (clientNameFromSession) {
                setClientName(clientNameFromSession);
            } else {
                console.log("Cliente no está logueado");
            }
        };
        
        fetchDishes();
        fetchDrinks();
        fetchLoggedInUser();
    }, []);

    const renderDishCard = (dish) => {
        const imageUrl = dish.imageUrl ? `https://sodaalamoapp.onrender.com/dish${dish.imageUrl}` : '/placeholder.jpg'
    
        return (
            <Card key={dish._id} sx={{ maxWidth: 345, m: 2 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={imageUrl}
                    alt={dish.dishName}
                    onError={(e) => e.target.src = '/placeholder.jpg'}
                />
                <CardContent>
                    <Typography variant="h6">{dish.dishName || "Sin nombre"}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dish.dishDescription || "Sin descripción"}
                    </Typography>
                    <Typography variant="body1" color="primary">
                        ₡{dish.dishPrice ? dish.dishPrice.toFixed(2) : "0.00"}
                    </Typography>
                    <Button onClick={() => handleOrderClick(dish)} variant="contained" color="primary">
                        Ordenar
                    </Button>
                </CardContent>
            </Card>
        );
    };
    

    const handleOrderClick = (dish) => {
        setSelectedDish(dish);
        setOpenModal(true);
        setTotalAmount(dish.dishPrice);
    };

    const handleDrinkChange = (event) => {
        const selectedDrink = event.target.value;
        setSelectedDrink(selectedDrink);
        const drink = drinks.find(drink => drink._id === selectedDrink);
        setTotalAmount(prevTotal => prevTotal + (drink ? drink.drinkPrice : 0));
    };

    const handleSubmitOrder = async () => {
        try {
            const orderDetailData = {
                dish: selectedDish._id,
                drink: selectedDrink,
                clientName: clientName,  // Solo el nombre del cliente
                quantity: 1,
                specialInstructions: '',
            };
    
            // Obtener el token desde el almacenamiento (sessionStorage o localStorage)
            const token = sessionStorage.getItem('token'); // O usa el método que estés usando para guardar el token
    
            const response = await axios.post(
                `https://sodaalamoapp.onrender.com/orderDetail`,
                orderDetailData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Enviar el token en los headers
                    }
                }
            );
    
            console.log('Orden creada:', response.data);
            toast.success('Su orden se realizó correctamente');  // Agregar el toast
            setOpenModal(false);
        } catch (error) {
            console.error('Error al crear la orden:', error);
        }
    };

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: '3rem',
                    color: 'green',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                }}
            >
                Menú
            </Typography>

            <Box sx={{ marginBottom: '3rem' }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Desayuno
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {desayunoDishes.length > 0 ? desayunoDishes.map(renderDishCard) : <Typography>No hay platos disponibles</Typography>}
                </Box>
            </Box>

            <Box sx={{ marginBottom: '3rem' }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Almuerzo
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {almuerzoDishes.length > 0 ? almuerzoDishes.map(renderDishCard) : <Typography>No hay platos disponibles</Typography>}
                </Box>
            </Box>

            <Box sx={{ marginBottom: '3rem' }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Cena
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    {cenaDishes.length > 0 ? cenaDishes.map(renderDishCard) : <Typography>No hay platos disponibles</Typography>}
                </Box>
            </Box>

            {/* Modal de orden */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '400px',
                    }}
                >
                    <Typography variant="h6">Ordenar Platillo</Typography>

                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        {selectedDish?.dishName} - ₡{selectedDish?.dishPrice.toFixed(2)}
                    </Typography>

                    <TextField
                        label="Nombre del Cliente"
                        variant="outlined"
                        fullWidth
                        sx={{ marginTop: '10px' }}
                        value={clientName}
                        disabled
                    />

                    <FormControl fullWidth sx={{ marginTop: '10px' }}>
                        <InputLabel>Bebida</InputLabel>
                        <Select
                            value={selectedDrink}
                            onChange={handleDrinkChange}
                            label="Bebida"
                        >
                            {drinks.map((drink) => (
                                <MenuItem key={drink._id} value={drink._id}>
                                    {drink.drinkName} - ₡{drink.drinkPrice.toFixed(2)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        Total: ₡{totalAmount.toFixed(2)}
                    </Typography>

                    <Button
                        onClick={handleSubmitOrder}
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: '20px' }}
                    >
                        Finalizar Orden
                    </Button>
                </Box>
            </Modal>

            {/* ToastContainer */}
            <ToastContainer />
        </Box>
    );
};

export default MenuComponent;
