import User from '../models/User';
import UserAddress from '../models/UserAddress';

class UserController {
  async show(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(400).json({ message: 'Usuario nao encontrado.' });
    }

    return res.json(user);
  }

  async store(req, res) {
    const { email, cpf, rg } = req.body;

    if (await User.findOne({ where: { cpf } })) {
      return res.status(400).json({ message: 'CPF já cadastrado.' });
    }

    if (await User.findOne({ where: { rg } })) {
      return res.status(400).json({ message: 'RG já cadastrado.' });
    }

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    const user = await User.create(req.body);

    const userAddress = await UserAddress.create({
      user_id: user.id,
      ...req.body,
    });

    return res.json({ user, userAddress });
  }

  async index(req, res) {
    const users = await User.findAll({});

    return res.json(users);
  }
}

export default new UserController();
