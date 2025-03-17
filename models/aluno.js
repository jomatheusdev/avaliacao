let mongoose = require("mongoose");

let alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true, min: 15, max: 99 },
  perfil: { type: mongoose.Schema.Types.ObjectId, ref: "Perfil" }, // Um para um
});

module.exports = mongoose.model("Aluno", alunoSchema);
