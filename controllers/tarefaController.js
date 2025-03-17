const criarTarefa = async (req, res) => {
  try {
    const { titulo, alunoId, disciplinasIds } = req.body;
    const concluida = false;

    const novaTarefa = new Tarefa({
      titulo,
      aluno: alunoId,
      concluida,
      disciplinas: disciplinasIds,
    });

    await novaTarefa.save();

    res.status(201).json({
      message: "Tarefa criada com sucesso!",
      tarefa: novaTarefa,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa", error });
  }
};

const obterTodasTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find().populate("aluno").populate("disciplinas");
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter tarefas", error });
  }
};

const deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;

    await Tarefa.deleteOne({ _id: id });
    res.status(200).json({ message: "Tarefa removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover tarefa", error });
  }
};

const editarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, concluida } = req.body;

    let tarefa = await Tarefa.findByIdAndUpdate(id, { titulo, concluida });
    res.status(200).json({
      message: "Tarefa atualizada com sucesso!",
      tarefa,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa", error });
  }
};

