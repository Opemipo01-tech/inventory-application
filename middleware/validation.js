const { body, validationResult } = require("express-validator");

const validateCategory = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Category name is required.")
        .isLength({ min: 2, max: 255 })
        .withMessage("Category name must be between 2 and 255 characters.")
        .isAlpha()
        .withMessage("must contain only letter from a-z"),
    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required.")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Must contain only letters and spaces."),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render("createCategory", {
                errors: errors.array(),
            });
        }

        next();
    },
];

const validateItem = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Item name is required.")
        .isLength({ min: 2, max: 100 })
        .withMessage("Item name must be between 2 and 100 characters.")
        .isAlpha()
        .withMessage("must contain only letter from a-z"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required.")
        .matches(/^[a-zA-Z\s]+$/)
         .withMessage("Must contain only letters and spaces."),

    body("price")
        .notEmpty()
        .withMessage("Price is required.")
        .isFloat({ min: 0 })
        .withMessage("Price must be a valid positive number."),

    body("quantity")
        .notEmpty()
        .withMessage("Quantity is required.")
        .isInt({ min: 0 })
        .withMessage("Quantity must be a whole number of 0 or more."),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render("createItem", {
                errors: errors.array(),
                categoryId: req.params.id,
            });
        }

        next();
    },
];

module.exports = {
    validateCategory,
    validateItem,
};