export const isadmin = (req, res, next) => {
    if (req.user?.is_admin) {
        next(); 
    }else{
        res.status(403).json({ message: "Access denied. Admins only." });
    }
};  