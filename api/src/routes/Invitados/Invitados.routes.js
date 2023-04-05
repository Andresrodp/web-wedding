import { Router } from 'express';

import postInvitados from '../../controllers/Invitados/postInvitados.js';
import getAllInvitados from '../../controllers/Invitados/getAllInvitados.js';

const InvitadosRoutes = Router();

InvitadosRoutes.post('/nuevo', postInvitados);
InvitadosRoutes.get('/todos', getAllInvitados);

export default InvitadosRoutes;
