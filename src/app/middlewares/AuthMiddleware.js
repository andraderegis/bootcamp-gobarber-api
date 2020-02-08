import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/authConfig';

class AuthMiddleware {
  async authorize(req, res, next) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({ error: 'Access token not provided.' });
      }

      const [, token] = authHeader.split(' ');

      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.userId = decoded.id;

      return next();
    } catch (e) {
      return res.status(401).json({ error: 'Invalid access token.' });
    }
  }
}

export default new AuthMiddleware();
