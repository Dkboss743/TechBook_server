const express = require("express");
const router = express.Router();
const { runValidation } = require("../validators");
const { requireSignIn, authMiddleware } = require("../controllers/auth");
const {
  create,
  list,
  read,
  update,
  remove,
  clickCount,
} = require("../controllers/link");
const {
  linkCreateValidator,
  linkUpdateValidator,
} = require("../validators/link");

// routes
router.post(
  "/link",
  linkCreateValidator,
  runValidation,
  requireSignIn,
  authMiddleware,
  create
);
router.get("/links", list);
router.put("/click-count", clickCount);
router.get("/link/:slug", read);
router.put(
  "/link/:slug",
  linkUpdateValidator,
  runValidation,
  requireSignIn,
  authMiddleware,
  update
);
router.delete("/link/:slug", requireSignIn, authMiddleware, remove);
module.exports = router;
