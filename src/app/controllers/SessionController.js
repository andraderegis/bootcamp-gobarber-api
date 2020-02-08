import jwt from 'jsonwebtoken';

import authConfig from '../../config/authConfig';

import User from '../models/User';

class SessionControler {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    const invalidCredentialsError = {
      error: 'Invalid user email or password.',
    };

    if (!user) {
      res.status(401).json(invalidCredentialsError);
    }

    if (!(await user.checkPassword(password))) {
      res.status(401).json(invalidCredentialsError);
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionControler();
