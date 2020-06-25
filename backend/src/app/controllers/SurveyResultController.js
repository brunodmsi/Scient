import Bank from '../models/Bank';
import SurveyResult from '../models/SurveyResult';
import User from '../models/User';

class SurveyResultController {
  async show(req, res) {
    const user = await User.findOne({ where: { id: req.userId } });

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não encontrado',
      });
    }

    if (!user.result_given) {
      return res.status(401).json({
        message: 'Resposta do usuario ainda nao foi processada',
      });
    }

    const result = await SurveyResult.findOne({
      where: {
        user_id: user.id,
      },
    });

    const recommended = result.recommended_banks;
    const banksPromise = recommended.map(async (bankId) => {
      const fetchBank = await Bank.findByPk(bankId);

      return fetchBank;
    });

    const banks = await Promise.all(banksPromise);

    return res.json(banks);
  }
}

export default new SurveyResultController();
