const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/alunoController.js");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/aluno", authMiddleware, alunoController.obterTodosAlunos);
router.post("/aluno", authMiddleware, alunoController.criarAluno);
router.delete("/aluno/:id", authMiddleware, alunoController.deletarAluno);
router.put("/aluno/:id", authMiddleware, alunoController.editarAluno);

module.exports = router;