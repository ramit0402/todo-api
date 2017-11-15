var mongoose = require('mongoose');

var User  = mongoose.model('user', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var user = new User({
//   email: '  ramitlegend@gmail.com   '
// });
//
// user.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (error) => {
//   console.log('Unable to save User', error);
// });

module.exports = {User};
