import Question from '../models/Question';

class QuestionController {
  async index(req, res) {
    const question = await Question.findAll();

    return res.json(question);
  }

  async store(req, res) {
    const { title, options } = req.body;

    if (options.length > 5 || options.length < 3) {
      return res.status(401).json({
        message: 'As opcoes precisam ter entre 3-5 escolhas',
      });
    }

    const question = await Question.create({
      title,
      options,
    });

    return res.json(question);
  }
}

export default new QuestionController();
