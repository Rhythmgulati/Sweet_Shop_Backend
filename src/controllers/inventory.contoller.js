import { purchaseSweet, addInventory } from "../repositories/inventory.repository.js";
import ApiResponse from "../utils/responseHandler.js";

const purchaseSweetController = async (req, res) => {
    try {
        const { id } = req.params;  
        const { quantity } = req.body;
        if (!quantity || quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be a positive number" });
        }
        await purchaseSweet(id, quantity);
        return ApiResponse.success(res, null, "Purchase successful");
    } catch (error) {
        return ApiResponse.error(res, error.message);
    }   
};

const addInventoryController = async (req, res) => {
    try {
        const { id } = req.params;  
        const { quantity } = req.body;
        if (!quantity || quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be a positive number" });
        }
        await addInventory(id, quantity);
        return ApiResponse.success(res, null, "Inventory updated successfully");
    }
    catch (error) {
        return ApiResponse.error(res, error.message);
    }
};

export { purchaseSweetController, addInventoryController };