import { Router } from 'express';

import postInvitados from '../../controllers/Invitados/postInvitados.js';
import getAllInvitados from '../../controllers/Invitados/getAllInvitados.js';
import getInvitadoById from '../../controllers/Invitados/getInvitadoById.js';

const InvitadosRoutes = Router();

InvitadosRoutes.post('/nuevo', postInvitados);
InvitadosRoutes.get('/todos', getAllInvitados);
InvitadosRoutes.get('/:id', getInvitadoById);

export default InvitadosRoutes;
