const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/store',
    handler: (request, response) => {
      Models.Books.findAll({
        attributes: ['userid', 'title', 'note'],
      }).then((notesArr) => {
        response({
          notesArr,
          statusCode: 200,
        });
      }).catch(err => console.log(err));
    },
  },
];
