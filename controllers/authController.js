const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario");
const { SECRET_KEY } = require("../middlewares/authMiddleware");

const register = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      email,
      senha: senhaHash,
    });

    await novoUsuario.save();

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, { expiresIn: "1h" });
    
    res.status(200).json({ message: "Login bem-sucedido", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
};

module.exports = { register, login };
