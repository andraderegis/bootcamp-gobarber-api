import User from '../models/User';
import UserControllerValidator from '../validators/controllers/UserControllerValidator';

class UserController {
  async create(req, res) {
    if (!(await UserControllerValidator.isValidCreate(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const hasUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (hasUser) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.status(201).json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    if (!(await UserControllerValidator.isValidUpdate(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ error: `Not found user ${req.userId}.` });
    }

    if (email && email !== user.email) {
      const hasUser = await User.findOne({ where: { email } });

      if (hasUser) {
        return res.status(400).json({ error: 'User email already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'oldPassword does not match.' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
