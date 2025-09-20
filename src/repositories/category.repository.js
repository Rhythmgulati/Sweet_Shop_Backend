import db from '../config/knex.js';

export const getAll = async() => {
    return db('categories').select('*');
};

export const addCategory = async (category) => {
    const [row] = await db("categories")
        .insert({ name: category })
        .returning(["id", "name"]);  
    return row; 
};
