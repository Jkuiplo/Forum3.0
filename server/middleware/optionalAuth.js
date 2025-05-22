const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "secret";

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        req.user = null; // 👈 если нет токена — просто null
        return next();
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
        req.user = decoded;
    } catch (err) {
        req.user = null; // 👈 если токен кривой — всё равно продолжаем
    }

    next();
};
