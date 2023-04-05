import Invitados from "../../models/Invitados.js";


const postInvitados = async (req, res) => {
    try {
        const { nombre, apellido, acompanantes } = req.body;

        await Invitados.create ({
            nombre: nombre,
            apellido: apellido,
            acompanantes: acompanantes,
        });
        res.status(200).json({
            message: "Invitado agregado correctamente",
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error al agregar invitado",
            error: error.message,
        });
    }
};

export default postInvitados;