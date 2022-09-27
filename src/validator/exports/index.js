const ExportNotesPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ExportValidator = {
  validateExportNotesPayload: (payload) => {
    console.log(payload);
    const validateResult = ExportNotesPayloadSchema.validate(payload);

    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

module.exports = ExportValidator;
