import { register, login } from "../services/authService.js";
import ApiResponse from "../utils/responseHandler.js";

const registerController = async (req, res) => {
    try {
        const { username, password, is_admin } = req.body;
        const user = await register(username, password, is_admin);
        return ApiResponse.success(res, user, "User registered successfully");
    } catch (error) {
        return ApiResponse.error(res, error.message);
    }
};

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await login(username, password);
        return ApiResponse.success(res, { token }, "Login successful");
    } catch (error) {
        return ApiResponse.error(res, error.message);
    }
};

export { registerController, loginController };
