import * as Yup from 'yup';

import SchemaStrategy from '../SchemaStrategy';

class CreateUserSchemaValidator extends SchemaStrategy {
  schema() {
    return Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
  }
}

export default new CreateUserSchemaValidator();
