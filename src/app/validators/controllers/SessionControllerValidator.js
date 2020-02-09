import * as Yup from 'yup';

class SessionControllerValidator {
  /**
   *
   * @param {Object} content
   */
  isValidLogin(content) {
    const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    return loginSchema.isValid(content);
  }
}

export default new SessionControllerValidator();
