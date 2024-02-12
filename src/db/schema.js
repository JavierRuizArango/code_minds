const { Schema, model } = require('mongoose');


const countrySchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  continent: {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  capital: {
    type: String,
    required: true,
  },
  languages: [
    {
      name: {
        type: String,
        required: true,
      }
    }
  ], 
  currency: {
    type: String,
    required: true,
  },
});


const Country = model('Country', countrySchema);

module.exports = { Country };
