import db from '../config/knex.js';

export const createSweet = async(sweet) => {
    return db('sweets').insert(sweet);
};

export const getAllSweets = async() => {
    return db('sweets').select('*');
};

export const getSweetById = async(id) => {
    return db('sweets').where({ id }).first();
};

export const updateSweet = async(id, sweet) => {
    return db('sweets').where({ id }).update(sweet);
};

export const deleteSweet = async(id) => {
    return db('sweets').where({ id }).del();
};

export const searchs= async(filters) => {
    let query = db('sweets').select("*");
    if (filters.name) query.whereILike("name", `%${filters.name}%`);
    if (filters.category_id) query.where("category_id", filters.category_id);
    if (filters.minPrice) query.where("price", ">=", filters.minPrice);
    if (filters.maxPrice) query.where("price", "<=", filters.maxPrice);
    return query;
}