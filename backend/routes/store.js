const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/store',
    handler: (request, response) => {
      console.log(request.payload);
      const notes = request.payload;
      const promiseArr = [];
      notes.forEach((elem) => {
        promiseArr.push(Models.Notes.upsert({
          userid: elem.id,
          title: elem.title,
          note: elem.note,
        }, {
          where: {
            userid: elem.id,
          },
        }));
      });
      Promise.all(promiseArr).then(() => {
        response({
          promiseArr,
          statusCode: 201,
        });
      }).catch(err => console.log(err));
    },
  },
];
