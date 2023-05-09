import mongoose from "mongoose";

const invitadosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    acompanantes: {
        type: [String],
    },
    confirmado: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Invitados", invitadosSchema);