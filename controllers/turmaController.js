const criarTurma = async (req, res) => {
  try {
    const { nome, alunosIds, professorId } = req.body;

    const novaTurma = new Turma({
      nome,
      alunos: alunosIds,
      professor: professorId,
    });

    await novaTurma.save();

    res.status(201).json({
      message: "Turma criada com sucesso!",
      turma: novaTurma,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar turma", error });
  }
};

const obterTodasTurmas = async (req, res) => {
  try {
    const turmas = await Turma.find().populate('alunos professor');
    res.status(200).json(turmas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter turmas", error });
  }
};

const deletarTurma = async (req, res) => {
  try {
    const { id } = req.params;

    await Turma.deleteOne({ _id: id });
    res.status(200).json({ message: "Turma removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover turma", error });
  }
};

const editarTurma = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, alunosIds, professorId } = req.body;

    let turma = await Turma.findByIdAndUpdate(id, { nome, alunos: alunosIds, professor: professorId });
    res.status(200).json({
      message: "Turma atualizada com sucesso!",
      turma,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar turma", error });
  }
};

