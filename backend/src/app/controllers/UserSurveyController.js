import UserSurvey from '../models/UserSurvey';
import User from '../models/User';

class UserSurveyController {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não encontrado',
      });
    }

    const userSurvey = await UserSurvey.findAll({
      where: { user_id: user.id },
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

    if (!answers.isArray()) {
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
