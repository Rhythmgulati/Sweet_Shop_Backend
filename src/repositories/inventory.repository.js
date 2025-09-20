import db from '../config/knex.js';

// Decrease stock
export const purchaseSweet = async (id, qty) => {
  return db('sweets')
    .where({ id })
    .decrement('quantity', qty)
    .returning(['id', 'name', 'category_id', 'price', 'quantity']);
};

// Increase stock
export const addInventory = async (id, qty) => {
  return db('sweets')
    .where({ id })
    .increment('quantity', qty)
    .returning(['id', 'name', 'category_id', 'price', 'quantity']);
};
