import Question from '../models/Question';

class QuestionController {
  async index(req, res) {
    const question = await Question.findAll();

    return res.json(question);
  }

  async store(req, res) {
    const { title, options } = req.body;

    if (options.length > 5 || options.length < 2) {
      return res.status(401).json({
        message: 'As opcoes precisam ter entre 2-5 escolhas',
      });
    }

    const question = await Question.create({
      title,
      options,
    });

    return res.json(question);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const question = await Question.findOne({ where: { id } });

    if (!question) {
      return res.status(401).json({
        message: 'Questao nao encontrada',
      });
    }

    question.update({
      title,
    });

    question.save();

    return res.json(question);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const question = await Question.findOne({ where: { id } });

    if (!question) {
      return res.status(401).json({
        message: 'Questao nao encontrada',
      });
    }

    question.destroy();

    return res.json(true);
  }
}

export default new QuestionController();
