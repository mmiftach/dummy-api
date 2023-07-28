const express = require("express")
const router = express.Router()

const petsController = require("../controller/pets.controller")

router.get("/", petsController.getAll)
router.get("/:id", petsController.getById)
router.post("/", petsController.create)
router.put("/:id", petsController.update)
router.delete("/:id", petsController.delete)

module.exports = router