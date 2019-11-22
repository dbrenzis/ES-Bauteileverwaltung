const express = require("express");
const router = express.Router();
const bauteile = require("../controllers/bauteil");

module.exports = router;

// Define the Bauteile route
router.get("/bauteile", bauteile.getBauteilAll);

router.get("/bauteile/:id", bauteile.getBauteilById);

router.post("/bauteile", bauteile.postBauteil);

router.put("/bauteile/:id", bauteile.putBauteilById);

router.delete("/bauteile/:id", bauteile.deleteBauteilById);
