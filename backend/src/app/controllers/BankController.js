import { Op } from 'sequelize';
import Bank from '../models/Bank';

class BankController {
  async index(req, res) {
    const banks = await Bank.findAll();

    return res.json(banks);
  }

  async store(req, res) {
    const { name } = req.body;

    const bankExists = await Bank.findOne({
      where: {
        name: {
          [Op.iLike]: name,
        },
      },
    });

    if (bankExists) {
      return res.status(401).json({
        message: 'Banco ja cadastrado',
      });
    }

    const bank = await Bank.create(req.body);

    return res.json(bank);
  }
}

export default new BankController();
