const express = require("express");
const app = express();

app.use(express.json());

const turmaRoutes = require("./routes/turmaRoutes");
const tarefaRoutes = require("./routes/turmaRoutes");
const professorRoutes = require("./routes/professorRoutes");
const perfilRoutes = require("./routes/perfilRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const alunoRoutes = require("./routes/alunoRoutes");
const authRoutes = require("./routes/authRoutes");
const db = require("./database/db");

app.use("/api", turmaRoutes);
app.use("/api", tarefaRoutes);
app.use("/api", professorRoutes);
app.use("/api", perfilRoutes);
app.use("/api", disciplinaRoutes);
app.use("/api", alunoRoutes);
app.use("/api", authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
