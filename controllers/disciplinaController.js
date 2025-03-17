const criarDisciplina = async (req, res) => {
  try {
    const { nome, descricao, dataInicio, dataFim, tarefasIds } = req.body;

    const novaDisciplina = new Disciplina({
      nome,
      descricao,
      dataInicio,
      dataFim,
      tarefas: tarefasIds,
    });

    await novaDisciplina.save();

    // Atualiza as tarefas associadas à disciplina
    await Tarefa.updateMany(
      { _id: { $in: tarefasIds } },
      { $push: { disciplinas: novaDisciplina._id } }
    );

    res.status(201).json({
      message: "Disciplina criada com sucesso!",
      disciplina: novaDisciplina,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar disciplina", error });
  }
};

const obterTodasDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.find().populate('tarefas');
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter disciplinas", error });
  }
};

const deletarDisciplina = async (req, res) => {
  try {
    const { id } = req.params;

    await Disciplina.deleteOne({ _id: id });
    res.status(200).json({ message: "Disciplina removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover disciplina", error });
  }
};

const editarDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, dataInicio, dataFim, tarefasIds } = req.body;

    let disciplina = await Disciplina.findByIdAndUpdate(id, { nome, descricao, dataInicio, dataFim, tarefas: tarefasIds });
    res.status(200).json({
      message: "Disciplina atualizada com sucesso!",
      disciplina,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar disciplina", error });
  }
};

module.exports = {
  criarDisciplina,
  obterTodasDisciplinas,
  deletarDisciplina,
  editarDisciplina
};

