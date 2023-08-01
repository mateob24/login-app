import {Router} from 'express'

import {login, 
        register, 
        logout, 
        profile
    } from '../controllers/auth.controller.js' // Aca se importan las funciones que vienen de controlller 

import { authRequired } from "../middlewares/validateToken.js"; // IMPORTAMOS LA FUNCION QUE VALIDA EL TOKEN
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const router = Router()

    // EXPORTAMOS FUNCION DE RUTA DE REGISTRO 
router.post('/register', validateSchema(registerSchema), register)

    // EXPORTAMOS FUNCION DE  RUTA DE LOGIN 
router.post('/login', validateSchema(loginSchema), login)

    // EXPORTAMOS FUNCION DE  RUTA DE LOGOUT 
router. post('/logout', logout)

    // EXPORTAMOS FUNCION DE  RUTA PROTEGIDA 
router.get('/profile', authRequired, profile) // primero protege la ruta y despues

export default router