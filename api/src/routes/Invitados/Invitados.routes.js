import { Router } from 'express';

import postInvitados from '../../controllers/Invitados/postInvitados.js';
import getAllInvitados from '../../controllers/Invitados/getAllInvitados.js';
import getInvitadoById from '../../controllers/Invitados/getInvitadoById.js';
import putInvitadoById from '../../controllers/Invitados/putInvitadoById.js';

const InvitadosRoutes = Router();

InvitadosRoutes.post('/nuevo', postInvitados);
InvitadosRoutes.get('/todos', getAllInvitados);
InvitadosRoutes.get('/:id', getInvitadoById);
InvitadosRoutes.get('/confirm/:id', putInvitadoById);

export default InvitadosRoutes;
