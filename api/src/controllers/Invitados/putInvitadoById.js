import Invitados from "../../models/Invitados.js";


const putInvitadoById = async (req, res) => {
  const { id } = req.params;
  try {
    const invitado = await Invitados.findById(id)
    invitado.confirmado = true;
    await invitado.save();
    res.status(200).json({
      message: "Invitación confirmada",
    })
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar invitado",
    })
  }
};

export default putInvitadoById;