import * as Yup from 'yup';

class UserControllerValidator {
  /**
   *
   * @param {Object} content
   */
  isValidCreate(content) {
    const inputSchema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    return inputSchema.isValid(content);
  }

  /**
   *
   * @param {Object} content
   */
  isValidUpdate(content) {
    const updateSchema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    return updateSchema.isValid(content);
  }
}

export default new UserControllerValidator();
