const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let queueVisitor = new Schema({
   name: {
      type: String
   },
   phone: {
      type: String
   },
   nomerAntrian: {
      type: String
   },
   date: {
      type: String
   }
}, {
   collection: 'queueVisitor'
})
module.exports = mongoose.model('queueVisitor', queueVisitor)