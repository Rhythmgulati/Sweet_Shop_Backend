import { createSweet, getAllSweets, getSweetById  } from "../repositories/sweet.repository.js";
import { updateSweet, deleteSweet, searchs } from "../repositories/sweet.repository.js";
import ApiResponse from "../utils/responseHandler.js";

const create = async (req, res) => {
    const { name, category_id, price, quantity } = req.body;
    if (!name || !category_id || !price || !quantity) {
        return res.status(400).json({ message: "All fields are required" });
    };
    try {
        const sweet = await createSweet({ name, category_id, price, quantity });
        return ApiResponse.success(res, sweet, "Sweet created successfully");
    }   catch (error) {
        return ApiResponse.error(res, error.message);
    }   

};

const getAll = async (req, res) => {
    try {
        const sweets = await getAllSweets();    
        return ApiResponse.success(res, sweets, "Sweets fetched successfully");
    }   catch (error) {        
        return ApiResponse.error(res, error.message);
    }   
};

const update = async (req, res) => {
    const { id } = req.params;
    const { name, category_id, price, quantity } = req.body;    
    if (!name || !category_id || !price || !quantity) {
        return res.status(400).json({ message: "All fields are required" });
    };
    try {
        const sweet = await getSweetById(id);   
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        const updatedSweet = await updateSweet(id, { name, category_id, price, quantity });
        return ApiResponse.success(res, updatedSweet, "Sweet updated successfully");
    }
    catch (error) {
        return ApiResponse.error(res, error.message);
    }   
};

const remove = async (req, res) => {
    const { id } = req.params;  
    try {
        const sweet = await getSweetById(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        await deleteSweet(id);
        return ApiResponse.success(res, null, "Sweet deleted successfully");
    }   catch (error) {
        return ApiResponse.error(res, error.message);
    }
};

const search = async (req, res) => {
    const { name, category_id, minPrice, maxPrice } = req.query;    
    try {
        const filters = { name, category_id, minPrice, maxPrice };
        const sweets = await searchs(filters);
        return ApiResponse.success(res, sweets, "Sweets fetched successfully");
    } catch (error) {
        return ApiResponse.error(res, error.message);
    }       
};

export { create, getAll, update, remove, search };