import UserSurvey from '../models/UserSurvey';
import User from '../models/User';
import Question from '../models/Question';

class UserSurveyController {
  async index(req, res) {
    const user = await User.findOne({ where: { id: req.userId } });

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não encontrado',
      });
    }

    const userSurvey = await UserSurvey.findAll({
      where: { user_id: user.id },
      include: [
        { model: Question, as: 'question' },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email', 'rg', 'cpf'],
        },
      ],
    });

    return res.json(userSurvey);
  }

  /**
   * Receives an array with questions and its answers,
   */
  async store(req, res) {
    const { answers } = req.body;

    const user = await User.findOne({ where: { id: req.userId } });

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não encontrado',
      });
    }

    if (answers instanceof Array === false) {
      return res.status(401).json({
        message: 'As respostas estão no formato incorreto.',
      });
    }

    const promises = answers.map(async (answer) => {
      const response = await UserSurvey.create({
        question_id: answer.questionId,
        user_id: user.id,
        answer_index: answer.chosenIndex,
      });

      return response;
    });

    await Promise.all(promises);

    user.update({
      survey_done: true,
    });

    user.save();

    return res.json(promises);
  }
}

export default new UserSurveyController();
