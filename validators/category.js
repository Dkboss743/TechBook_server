const { check } = require("express-validator");
exports.categoryCreateValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("image").not().isEmpty().withMessage("Image is required"),
  check("content").isLength({ min: 20 }).withMessage("minimum characters 20"),
];
exports.categoryUpdateValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("content").isLength({ min: 200 }).withMessage("minimum characters 200"),
];
