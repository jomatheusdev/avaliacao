const express = require("express");
const router = express.Router();
const turmaController = require("../controllers/turmaController.js");
const { authMiddleware } = require("../middlewares/authMiddleware"); 

router.get("/turma", authMiddleware, turmaController.obterTodasTurmas);
router.post("/turma", authMiddleware, turmaController.criarTurma);
router.delete("/turma/:id", authMiddleware, turmaController.deletarTurma);
router.put("/turma/:id", authMiddleware, turmaController.editarTurma);

module.exports = router;