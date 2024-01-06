const { validationResult } = require("express-validator");

const calendar = new Date();

const validateFields = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors:
                errors.array()
        })
        return false
    };
    return true
}


module.exports = {
    calendar,
    validateFields
}