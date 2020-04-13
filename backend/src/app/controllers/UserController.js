import User from '../models/User';
import UserAddress from '../models/UserAddress';

class UserController {
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
}

export default new UserController();
