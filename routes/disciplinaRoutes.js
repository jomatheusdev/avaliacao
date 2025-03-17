const express = require("express");
const router = express.Router();
const disciplinaController = require("../controllers/disciplinaController.js");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/disciplina", authMiddleware, disciplinaController.obterTodasDisciplinas);
router.post("/disciplina", authMiddleware, disciplinaController.criarDisciplina);
router.delete("/disciplina/:id", authMiddleware, disciplinaController.deletarDisciplina);
router.put("/disciplina/:id", authMiddleware, disciplinaController.editarDisciplina);

module.exports = router;