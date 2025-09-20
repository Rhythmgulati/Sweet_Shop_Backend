import db from '../config/knex.js';

export const createUser = async (user) => {
    return await db('users').insert(user);
};
export const getUserByusername = async (username) => {
    return await db('users').where({ username }).first();
}
