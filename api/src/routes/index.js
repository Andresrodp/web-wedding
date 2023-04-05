import {Router} from 'express';

import InvitadosRoutes from './Invitados/Invitados.routes.js';

const router = Router();

router.use ('/invitados', InvitadosRoutes);

export default router;