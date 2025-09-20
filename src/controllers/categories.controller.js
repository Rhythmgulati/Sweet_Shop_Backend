import { getAll , addCategory as addCategoryRepo } from "../repositories/category.repository.js";
import { asynchandler } from "../utils/asyncHandler.js";

const addCategory = asynchandler(async (req, res) => {
    const { name } = req.body;  
    if (!name) {
        return res.status(400).json({ message: "Category name is required" });
    }
    const category = await addCategoryRepo(name);
    return res.status(201).json({ message: "Category added successfully", category });
});

const getAllCategories = asynchandler(async (req, res) => {
    const categories = await getAll();
    return res.status(200).json({ message: "Categories fetched successfully", categories });
});

export { addCategory, getAllCategories };