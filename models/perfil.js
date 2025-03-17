let mongoose = require("mongoose");

let perfilSchema = new mongoose.Schema({
  matricula: String,
  telefone: String,
  endereco: String,
  aluno: { type: mongoose.Schema.Types.ObjectId, ref: "Aluno" }, // Um para um
});

module.exports = mongoose.model("Perfil", perfilSchema);