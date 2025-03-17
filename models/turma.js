let mongoose = require("mongoose");

let turmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aluno" }], // Um para muitos
  professor: { type: mongoose.Schema.Types.ObjectId, ref: "Professor" } // Um para um
});

module.exports = mongoose.model("Turma", turmaSchema);