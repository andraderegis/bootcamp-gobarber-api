class SchemaValidator {
  constructor({ schemaStrategy = null }) {
    this.schemaStrategy = schemaStrategy;
  }

  set schemaStrategy(schemaStrategy) {
    this.schemaStrategy = schemaStrategy;
  }

  async isValid(content) {
    return this.schemaStrategy.schema().isValid(content);
  }
}

export default SchemaValidator;
