const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfilController.js");
const { authMiddleware } = require("../middlewares/authMiddleware"); 

router.get("/perfil", authMiddleware, perfilController.obterTodosPerfis);
router.post("/perfil", authMiddleware, perfilController.criarPerfil);
router.delete("/perfil/:id", authMiddleware, perfilController.deletarPerfil);
router.put("/perfil/:id", authMiddleware, perfilController.editarPerfil);

module.exports = router;