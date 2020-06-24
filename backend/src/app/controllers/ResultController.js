// import Bank from '../models/Bank';
import User from '../models/User';
import UserSurvey from '../models/UserSurvey';
import Question from '../models/Question';
import Bank from '../models/Bank';

class ResultController {
  async generate(req, res) {
    const user = await User.findByPk(req.params.id);
    const array = [];

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

    userSurvey.forEach((element) => {
      switch (element.answer_index) {
        case 0:
          array.push(true);
          break;
        case 1:
          array.push(false);
          break;

        default:
          break;
      }
    });

    const banks = await Bank.findAll({
      where: {
        unlimited_withdraws: array[0],
        free_ted: array[1],
        deposit: array[2],
        descounts: array[3],
        annuity: array[4],
      },
    });

    if (banks.length !== 0) {
      return res.json(banks);
    }

    const query = await Bank.findAll({
      where: {
        unlimited_withdraws: array[0],
        free_ted: array[1],
        deposit: array[2],
        descounts: array[3],
      },
    });
    if (query.length !== 0) return res.json(query);

    const new_query = await Bank.findAll({
      where: {
        unlimited_withdraws: array[0],
        free_ted: array[1],
      },
    });

    if (new_query.length !== 0) return res.json(new_query);

    const new_new = await Bank.findAll({
      where: {
        unlimited_withdraws: array[0],
      },
    });

    if (new_new.length !== 0) return res.json(new_new);
    return null;
  }
}

export default new ResultController();
