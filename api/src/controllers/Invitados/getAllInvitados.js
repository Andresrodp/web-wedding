import Invitados from "../../models/Invitados.js";


const getAllInvitados = async (req, res) => {
    try {
        const invitados = await Invitados.find();
        res.status(200).json({
            message: "Invitados encontrados",
            invitados: invitados,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener invitados",
            error: error.message,
        });
    }
};

export default getAllInvitados;