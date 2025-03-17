const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController.js");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/tarefa", authMiddleware, tarefaController.obterTodasTarefas);
router.post("/tarefa", authMiddleware, tarefaController.criarTarefa);
router.delete("/tarefa/:id", authMiddleware, tarefaController.deletarTarefa);
router.put("/tarefa/:id", authMiddleware, tarefaController.editarTarefa);

module.exports = router;
