const express = require("express");
const router = express.Router();
const { runValidation } = require("../validators");
const { requireSignIn, adminMiddleware } = require("../controllers/auth");
const {
  create,
  list,
  read,
  update,
  remove,
} = require("../controllers/category");
const {
  categoryCreateValidator,
  categoryUpdateValidator,
} = require("../validators/category");

// routes
router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignIn,
  adminMiddleware,
  create
);
router.get("/categories", list);
router.post("/category/:slug", read);
router.put(
  "/category/:slug",
  categoryUpdateValidator,
  runValidation,
  requireSignIn,
  adminMiddleware,
  update
);
router.delete("/category/:slug", requireSignIn, adminMiddleware, remove);
module.exports = router;
