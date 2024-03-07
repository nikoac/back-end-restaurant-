const jwt = require("jsonwebtoken");

const validateToken = async(req, res, next) => {
    try {
        const token = req.headers['access-token'];
        if (!token) return res.status(401).json('Token inexistente');
        jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error) return res.status(401).json('Token inválido');
            req.user = decoded;
            next();
        } )
    } catch (error) {
        res.status(500).json(error);
    }
};

const validateRoll = (req, res, next) => {
    try {
        const user = req.user;
        if (user.role !== 'admin') return res.status(401).json('Usuario no autorizado')
        next()
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    validateToken,
    validateRoll,
};