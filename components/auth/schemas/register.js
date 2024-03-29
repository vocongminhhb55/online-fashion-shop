module.exports = {
  type: 'object',
  properties: {
    'full-name': { type: 'string', 'minLength': 1 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', 'minLength': 6 },
    tac: { type: 'string', 'minLength': 4 }
  },
  required: ['full-name', 'email', 'password'],
  additionalProperties: false,
};