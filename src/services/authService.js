import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, getUserByusername } from '../repositories/user.repository.js';

export const register = async (username, password, is_admin) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ username, password: hashedPassword, is_admin });
    return user;
};

export const login = async (username, password) => {
    const user = await getUserByusername(username);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    console.log(user);
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, is_admin: user.is_admin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};
