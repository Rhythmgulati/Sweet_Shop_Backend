// responsehandler 
export default class ApiResponse {

    // success response
    static success(res, data, message = "Success", statusCode = 200) {
        return res.status(statusCode).json({
            status: "success",
            message,
            data
        });
    };

    // error response
    static error(res, message = "Error", statusCode = 500, errors = []) {
        return res.status(statusCode).json({
            status: "error",          
            message,
            errors
        });
    };
};
