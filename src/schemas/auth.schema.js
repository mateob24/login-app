import { z } from 'zod'

    // VALIDACION DEL REGISTER 
export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email : z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email',
    }),
    password: z.string({
        required_error: 'Password is required',
    })
    .min(6, {
        message: 'Password must be at least 6 characteres',
    })
})

    // VALIDACION DEL LOGIN 
export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characteres',
    }),
})

export function loginUser(email, password) {
    // Simulamos una búsqueda en la lista de usuarios registrados
    const user = registeredUsers.find((user) => user.email === email);

    if (!user) {
    throw new Error('User not found');
    }

    if (user.password !== password) {
    throw new Error('Invalid password');
    }

    // Si llegamos hasta aquí, el inicio de sesión es exitoso
    return true;
}