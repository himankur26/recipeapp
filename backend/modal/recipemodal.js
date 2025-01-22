const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  // ingredients: [
  //   {
  //     name: { type: String, required: true },
  //     quantity: { type: String, required: true },
  // //   },
  // ],
  instructions: {
    type: String,
   // required: true,
  },
  prepTime: {
    type: String, // in minutes
   // required: true,
  },
  image: {
    type: String, // URL for an image
    default: '',
  },
  category: {
    type: String, 
    default: '',
  enum : ["non-veg","veg","Desert"]
  }
 
});

module.exports = mongoose.model('Recipe', recipeSchema);