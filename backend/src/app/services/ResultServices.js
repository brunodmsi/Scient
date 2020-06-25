import User from '../models/User';
import UserSurvey from '../models/UserSurvey';
import Question from '../models/Question';
import Bank from '../models/Bank';

class ResultService {
  async generate(userId) {
    const user = await User.findOne({
      where: {
        id: userId,
        survey_done: true,
        result_given: false,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
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

    const boolUserAnswers = userSurvey.map((element) => !!element.answer_index);

    const firstUserAnswersComparation = await Bank.findAll({
      where: {
        deposit: boolUserAnswers[0],
        unlimited_withdraws: boolUserAnswers[1],
        free_ted: boolUserAnswers[2],
        loan: boolUserAnswers[3],
        university_account: boolUserAnswers[4],
      },
    });

    if (firstUserAnswersComparation.length !== 0) {
      return firstUserAnswersComparation;
    }

    const secondUserAnswersComparation = await Bank.findAll({
      where: {
        unlimited_withdraws: boolUserAnswers[1],
        free_ted: boolUserAnswers[2],
        loan: boolUserAnswers[3],
        university_account: boolUserAnswers[4],
      },
    });

    if (secondUserAnswersComparation.length !== 0)
      return secondUserAnswersComparation;

    const thirdUserAnswersComparation = await Bank.findAll({
      where: {
        unlimited_withdraws: boolUserAnswers[1],
        free_ted: boolUserAnswers[2],
      },
    });

    if (thirdUserAnswersComparation.length !== 0)
      return thirdUserAnswersComparation;

    const fourthUserAnswersComparation = await Bank.findAll({
      where: {
        unlimited_withdraws: boolUserAnswers[1],
      },
    });

    if (fourthUserAnswersComparation.length === 0)
      throw new Error('Usuário não encontrado');

    return fourthUserAnswersComparation;
  }
}

export default new ResultService();
