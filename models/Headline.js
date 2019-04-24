const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const headlineSchema = new Schema({
  // `headline` is required and of type String
  headline: {
    type: String,
    required: true
  },
  // `summary` is required and of type String
  summary: {
    type: String,
    required: true
  },
  // `url` is required and of type String
  url: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Headline= mongoose.model("Headline", headlineSchema);

// Export the Article model
module.exports = Headline;
