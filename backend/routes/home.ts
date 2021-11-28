const express = require("express");
const { showHome } = require("../controllers/home");

const router = express.Router();

router.get("/", showHome);

export default router;
