const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/retrieve',
    handler: (request, response) => {
      Models.Notes.findAll({
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
