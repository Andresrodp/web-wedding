import Invitados from "../../models/Invitados.js";

const getInvitadoById = async (req, res) => {
  const { id } = req.params;
  try {
    const invitado = await Invitados.findById(id);
    res.status(200).json(invitado);
  } catch (error) {
    res.status(400).json({
      message: "ID no encontrado, intente nuevamente",
    })
  }
};

export default getInvitadoById;